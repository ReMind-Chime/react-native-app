import {router, Stack} from "expo-router";
import {useState} from "react";
import {ThemedText} from "@/components/ThemedText";
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from "react-native";
import database from "@/db";
import Notes from "@/db/models/Notes";
import { Note as NoteInterface } from "@/types/Notes"

export default function AddNotePage({note}: { note?: NoteInterface }) {
    const [title, setTitle] = useState(note ? note.title : "");
    const [content, setContent] = useState(note ? note.content : "");

    const handleSaveNote = async () => {
        const notesCollection = database.collections.get<Notes>('notes');
        await database.write(async () => {
            await notesCollection.create((newNote) => {
                newNote.title = title;
                newNote.content = content;
                newNote.createdAt = Date.now();
            })
        })

        const notes = await notesCollection.query().fetch();
        console.log("Notas guardadas:", notes);

        // Redirect or close the modal after saving
        router.push("/notes");
    };

    return (
        <View className={'flex-1 px-6 py-4'}>

            <Stack.Screen
                options={{
                    title: note ? "Editar Nota" : "Agregar Nota",
                }}
            />

            <ThemedText style={styles.label}>Título de la nota</ThemedText>
            <TextInput
                value={title}
                onChangeText={setTitle}
                style={styles.input}
            />

            <ThemedText style={styles.label}>Contenido de la nota</ThemedText>
            <TextInput
                value={content}
                onChangeText={setContent}
                style={[styles.input, {height: 100}]}
                multiline
                textAlignVertical="top"
            />

            <View style={{marginTop: 20}}>
                <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
                    <Text style={styles.saveButtonText}>
                        {note ? "Guardar Cambios" : "Guardar Nota"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    label: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold",
    },

    saveButton: {
        backgroundColor: "#6200ea",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
    },

    saveButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});