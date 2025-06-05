import { ThemedText } from "@/components/ThemedText";
import { Stack } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useColorScheme } from 'react-native';


export default function Page() {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [nextDose, setNextDose] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [frequencyValue, setFrequencyValue] = useState('');
  const [frequencyUnit, setFrequencyUnit] = useState<'minutos' | 'horas' | 'días'>('horas');
  const colorScheme = useColorScheme();
  const inputTextColor = colorScheme === 'dark' ? '#fff' : '#000';

  const handleTimeChange = (event, selectedDate) => {
      if (selectedDate) {
        setNextDose(selectedDate);
      }
      setShowTimePicker(false);
  };

  const formattedTime = nextDose.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
  });

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      alert("Se necesita permiso para usar la cámara.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className={'flex-1 px-2'}>
      <Stack.Screen
        options={{
          title: 'Nueva medicina',
        }}
      />

      <View className={'flex-col gap-4'}>

        {/* Nombre */}
        <View>
          <ThemedText type={'defaultSemiBold'}>Nombre de la medicina:</ThemedText>
          <TextInput
            style={{ color: inputTextColor }}
            className="border-2 border-gray-300 rounded-lg p-2 w-full text-lg"
            placeholder="Nombre de la medicina"
            placeholderTextColor="#999"
            onChangeText={setName}
            value={name}
          />
        </View>

        {/* Dosis */}
        <View>
          <ThemedText type={'defaultSemiBold'}>Dosis:</ThemedText>
          <TextInput
            style={{ color: inputTextColor }}
            className="border-2 border-gray-300 rounded-lg p-2 w-full text-lg"
            placeholder="00 mg"
            placeholderTextColor="#999"
            onChangeText={setDosage}
            value={dosage}
          />
        </View>

        {/* Próxima dosis (hora) */}
        <View>
          <ThemedText type={'defaultSemiBold'}>Hora de próxima dosis:</ThemedText>
          <Pressable
            onPress={() => setShowTimePicker(true)}
            className="border-2 border-gray-300 rounded-lg p-2 w-full text-lg"
          >
            <Text style={{ color: inputTextColor }}>{formattedTime}</Text>
          </Pressable>

          {showTimePicker && (
            <DateTimePicker
              value={nextDose}
              mode="time"
              is24Hour={true}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleTimeChange}
            />
          )}
        </View>

        {/* Frecuencia */}
        <View>
          <ThemedText type={'defaultSemiBold'}>Cada cuánto tiempo tomar:</ThemedText>
          <View className="flex-row gap-2">
            {/* Valor */}
            <TextInput
              style={{ color: inputTextColor }}
              keyboardType="numeric"
              className="flex-1 border-2 border-gray-300 rounded-lg p-2 text-lg"
              placeholder="Ej: 8"
              placeholderTextColor="#999"
              onChangeText={setFrequencyValue}
              value={frequencyValue}
            />
            {/* Unidad */}
            <View className="flex-1 border-2 border-gray-300 rounded-lg">
              <Picker
                selectedValue={frequencyUnit}
                onValueChange={(itemValue) => setFrequencyUnit(itemValue)}
                style={{ color: inputTextColor }}
              >
                <Picker.Item label="Minutos" value="minutos" />
                <Picker.Item label="Horas" value="horas" />
                <Picker.Item label="Días" value="días" />
              </Picker>
            </View>
          </View>
        </View>

        {/* Cámara */}
        <Pressable
          className="justify-center items-center bg-green-500 p-2 rounded-lg"
          onPress={openCamera}
        >
          <Text className="text-white font-bold">Tomar Foto</Text>
        </Pressable>

        {/* Imagen */}
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: '100%', height: 200, borderRadius: 10 }}
          />
        )}

        {/* Botón Guardar */}
        <Pressable
          className="justify-center items-center bg-blue-500 p-2 rounded-lg"
          onPress={() => {
            const frecuencia = `${frequencyValue} ${frequencyUnit}`;
            console.log({ name, dosage, nextDose, frecuencia, image });
            alert('Medicina guardada (simulado)');
          }}
        >
          <Text className="text-lg font-bold uppercase text-white">Guardar</Text>
        </Pressable>

      </View>
    </View>
  );
}
