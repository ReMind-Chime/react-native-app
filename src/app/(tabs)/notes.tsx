import {StyleSheet, View} from "react-native";
import { NotesList} from "@/components/screens/notes/NotesList";
import {AddButton} from "@/components/AddButton";
import {useEffect, useState} from "react";
import database from "@/db";
import Notes from "@/db/models/Notes";
import { Note as NoteType } from "@/types/Notes";

export default function NotesPage() {
    const [notes, setNotes] = useState<NoteType[]>([]);

    const fetchNotes = async () => {
        const notesCollection = database.collections.get<Notes>('notes');
        const fetchedData = await notesCollection.query().fetch();

        const rawNotes = fetchedData.map(note => note._raw);
        const formattedNotes = rawNotes.map((note) => ({
            id: note.id,
            title: (note as any).title,
            content: (note as any).content,
            createdAt: (note as any).created_at,
        }))
        setNotes(formattedNotes);
    };

    // Fetch notes when the component mounts
    useEffect(() => {
        fetchNotes()
    }, [notes]);

    return (
        <View style={styles.container}>

            <NotesList notes={notes}/>

            <View style={styles.addButtonWrapper}>
                <AddButton href={'/(modal)/notesform'}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    addButtonWrapper: {
        position: "absolute",
        bottom: 70,
        left: 0,
        right: 0,
        alignItems: "center",
    },
});