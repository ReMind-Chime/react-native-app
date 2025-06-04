import { StyleSheet, View, FlatList } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface Note {
  id: string
  title: string
  time: string
  date: string
}

interface NoteListProps {
  notes: Note[]
}

export function NotesList({ notes }: NoteListProps) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteCard}>
            <ThemedText style={styles.title}>{item.title}</ThemedText>
            <ThemedText style={styles.dateTime}>{item.date} - {item.time}</ThemedText>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => console.log(`Eliminar ${item.id}`)} style={styles.button}>
                <IconSymbol name="trash" size={24} color="#d32f2f" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push({ pathname: "../notesform", params: { title: item.title, date: item.date, time: item.time } })} style={styles.button}>
                <IconSymbol name="pencil" size={24} color="#1976d2" />
              </TouchableOpacity>
            </View>
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

  buttonContainer: {
    flexDirection: "row",
    marginTop: 12,
    gap: 10,
    position: "absolute",
    left: 262,
    bottom: -4,
  },
  button: {
    padding: 8,
    borderRadius: 5,
  },
});