import { StyleSheet, View, FlatList } from "react-native";
import { ThemedText } from "@/components/ThemedText";

interface Note {
    id: string
    title: string
    time: string 
    date: string
}

interface NoteListProps {
    notes: Note[]
}

export function NotesList({notes} : NoteListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteCard}>
            <ThemedText style={styles.title}>{item.title}</ThemedText>
            <ThemedText style={styles.dateTime}>{item.date} - {item.time}</ThemedText>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 80, // Espacio para que el botón `+` no quede tapado
  },
  noteCard: {
    backgroundColor: "#ffffff",
    padding: 17, // padding para la cajita (alargar o recortar)
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 2, 
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dateTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555", // Color más apagado para fecha y hora
    marginTop: 8,
  },
});