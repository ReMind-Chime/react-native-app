import {StyleSheet, View} from "react-native";
import { NotesList} from "@/components/screens/notes/NotesList";
import {AddButton} from "@/components/AddButton";
import {useState} from "react";


const exampleNotes = [
    {
        id: "1",
        title: "La Amoxicilina se debe ingerir con agua Natural",
        content: "CContenido de ejemplo para la nota 1. Aquí puedes agregar más detalles sobre la nota.Contenido de ejemplo para la nota 1. Aquí puedes agregar más detalles sobre la nota.ontenido de ejemplo para la nota 1. Aquí puedes agregar más detalles sobre la nota.",
        date: "03/mar",
        time: "10:00 AM"
    },
    {
        id: "2",
        title: "El Ketorolaco no se ingiere, se pone bajo la lengua",
        content: "Contenido de ejemplo para la nota 1. Aquí puedes agregar más detalles sobre la nota.",
        date: "03/mar",
        time: "10:15 AM"
    },
    {
        id: "3",
        title: "Las ampolletas de Vitamina se deben mezclar con jugo y beberse rápido",
        content: "Contenido de ejemplo para la nota 1. Aquí puedes agregar más detalles sobre la nota.",
        date: "03/mar",
        time: "12:00 PM"
    },
    {
        id: "4",
        title: "Las ampolletas de Vitamina se deben mezclar con jugo y beberse rápido",
        content: "Contenido de ejemplo para la nota 1. Aquí puedes agregar más detalles sobre la nota.",
        date: "03/mar",
        time: "12:00 PM"
    },
    {
        id: "5",
        title: "Las ampolletas de Vitamina se deben mezclar con jugo y beberse rápido",
        content: "Contenido de ejemplo para la nota 1. Aquí puedes agregar más detalles sobre la nota.",
        date: "03/mar",
        time: "12:00 PM"
    },
    {
        id: "6",
        title: "Las ampolletas de Vitamina se deben mezclar con jugo y beberse rápido",
        content: "Contenido de ejemplo para la nota 1. Aquí puedes agregar más detalles sobre la nota.",
        date: "03/mar",
        time: "12:00 PM"
    },
];

export default function NotesPage() {
    const [notes, setNotes] = useState(null)

    return (
        <View style={styles.container}>

            <NotesList notes={exampleNotes}/>

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