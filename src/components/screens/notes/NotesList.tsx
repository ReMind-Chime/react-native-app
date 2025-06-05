import {StyleSheet, View, FlatList} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {IconSymbol} from "@/components/ui/IconSymbol";
import {TouchableOpacity} from "react-native";
import {router} from "expo-router";
import {Note} from "@/types/Notes";
import database from "@/db";
import Notes from "@/db/models/Notes";

interface NoteListProps {
    notes?: Note[]
}

export function NoteComponent({note}: { note: Note }) {
    if (!note)
        return null; // Si no hay nota, no renderizar nada

    const date = note.createdAt ? new Date(note.createdAt) : null;

    const formattedDate = date
        ? `${date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })} - ${date.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })}`
        : "NaN";

    const deleteNote = async (noteId: string) => {
        const notesCollection = database.collections.get<Notes>('notes');
        await database.write(async () => {
            const noteToDelete = await notesCollection.find(noteId);
            if (noteToDelete) {
                await noteToDelete.destroyPermanently();
            }
        });
        console.log("Nota eliminada:", noteId);
    }

    return (
        <View style={styles.noteCard}>
            <ThemedText style={{fontSize: 18, fontWeight: 'bold'}}>{note.title}</ThemedText>
            <ThemedText className={'text-[16px] mt-3 text-justify'} numberOfLines={4}>{note.content}</ThemedText>

            <View className={'flex-row justify-between items-center mt-5'}>
                {/* Fecha y hora de la nota */}
                <ThemedText
                    className={'font-bold text-[16px]'}
                    style={{color: "#555"}}
                >
                    {formattedDate}
                </ThemedText>

                <View className={'flex-row'}>
                    {/* Eliminar nota */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => deleteNote(note.id)}
                    >
                        <IconSymbol name="trash" size={24} color="#d32f2f"/>
                    </TouchableOpacity>

                    {/* Editar nota */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.push({
                            pathname: "/notesform",
                            params: {id: note.id}
                        })}
                    >
                        <IconSymbol name="pencil" size={24} color="#1976d2"/>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export function NotesList({notes}: NoteListProps) {
    if (!notes || notes.length === 0) {
        return (
            <View className={'flex-1 items-center justify-center'}>
                <ThemedText className={'text-[18px] text-gray-500'}>
                    No existen notas aún.
                </ThemedText>
            </View>
        );
    }

    return (
        <View className={'flex-1 px-8 mb-[9rem]'}>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <NoteComponent note={item}/>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    noteCard: {
        backgroundColor: "#ffffff",
        padding: 17,
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#ccc",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    button: {
        padding: 8,
        borderRadius: 5,
    },
});