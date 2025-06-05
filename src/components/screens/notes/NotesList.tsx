import {StyleSheet, View, FlatList} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {IconSymbol} from "@/components/ui/IconSymbol";
import {TouchableOpacity} from "react-native";
import {router} from "expo-router";

interface Note {
    id: string
    title: string
    content: string
    time: string
    date: string
}

interface NoteListProps {
    notes: Note[]
}

export function NoteComponent({note}: { note: Note }) {
    return (
        <View style={styles.noteCard}>
            <ThemedText style={{fontSize: 18, fontWeight: 'bold'}}>{note.title}</ThemedText>
            <ThemedText className={'text-[16px] mt-3'} numberOfLines={4}>{note.content}</ThemedText>

            <View className={'flex-row justify-between items-center mt-5'}>
                {/* Fecha y hora de la nota */}
                <ThemedText
                    className={'font-bold text-[16px]'}
                    style={{color: "#555"}}
                >
                    {note.date} - {note.time}
                </ThemedText>

                <View className={'flex-row'}>
                    {/* Eliminar nota */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log(`Eliminar ${note.id}`)}
                    >
                        <IconSymbol name="trash" size={24} color="#d32f2f"/>
                    </TouchableOpacity>

                    {/* Editar nota */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.push({
                            pathname: "/notesform",
                            params: {title: note.title, date: note.date, time: note.time}
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