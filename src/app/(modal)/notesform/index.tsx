import { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text, Platform, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Stack } from "expo-router";

type Note = {
  title: string;
  date: Date;
  time: Date;
};

type AddNotePageProps = {
  note?: Note;
};

export default function AddNotePage({ note }: AddNotePageProps) {
  const [title, setTitle] = useState(note ? note.title : "");
  const [date, setDate] = useState(note ? note.date : new Date());
  const [showDate, setShowDate] = useState(false);
  const [time, setTime] = useState(note ? note.time : new Date());
  const [showTime, setShowTime] = useState(false);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDate(note.date);
      setTime(note.time);
    }
  }, [note]);

  const handleSaveNote = () => {
    if (note) {
      console.log("Nota editada:", {
        title,
        date: date.toLocaleDateString(),
        time: time.toLocaleTimeString(),
      });
    } else {
      console.log("Nueva nota guardada:", {
        title,
        date: date.toLocaleDateString(),
        time: time.toLocaleTimeString(),
      });
    }
    // Aquí puedes llamar a una función de guardado/actualización
  };

  return (
    <View style={styles.container}>

      <Stack.Screen
        options={{
          title: note ? "Editar Nota" : "Agregar Nota",
        }}
        />

      <TextInput
        placeholder="Descripcion de la nota"
        placeholderTextColor="#999"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <Text style={styles.label}>Fecha:</Text>
      <TouchableOpacity onPress={() => setShowDate(true)}>
        <TextInput
          style={styles.input}
          value={date.toLocaleDateString()}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>
      {showDate && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(_, selectedDate) => {
            setShowDate(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <Text style={styles.label}>Hora:</Text>
      <TouchableOpacity onPress={() => setShowTime(true)}>
        <TextInput
          style={styles.input}
          value={time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>
      {showTime && (
        <DateTimePicker
          value={time}
          mode="time"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(_, selectedTime) => {
            setShowTime(false);
            if (selectedTime) setTime(selectedTime);
          }}
        />
      )}

      <View style={{ marginTop: 20 }}>
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