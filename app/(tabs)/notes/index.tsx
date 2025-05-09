import {StyleSheet, View} from "react-native";
import { AddButton } from "../notes/AddButton";
import { NotesList } from "../notes/NotesList";


const exampleNotes = [
  { id: "1", title: "La Amoxicilina se debe ingerir con agua Natural", date: "03/mar", time: "10:00 AM" },
  { id: "2", title: "El Ketorolaco no se ingiere, se pone bajo la lengua", date: "03/mar", time: "10:15 AM" },
  { id: "3", title: "Las ampolletas de Vitamina se deben mezclar con jugo y beberse rápido", date: "03/mar", time: "12:00 PM" },
  { id: "4", title: "Las ampolletas de Vitamina se deben mezclar con jugo y beberse rápido", date: "03/mar", time: "12:00 PM" },
  { id: "5", title: "Las ampolletas de Vitamina se deben mezclar con jugo y beberse rápido", date: "03/mar", time: "12:00 PM" },
  { id: "6", title: "Las ampolletas de Vitamina se deben mezclar con jugo y beberse rápido", date: "03/mar", time: "12:00 PM" },
];

export default function Page() {
  return (
    <View style={styles.container}>
      
      <NotesList notes={exampleNotes} />

      <View style={styles.addButtonWrapper}>
        <AddButton onPress={() => console.log("Agregar nuevo recordatorio")} />
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

