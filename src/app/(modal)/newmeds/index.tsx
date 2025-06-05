import {ThemedText} from "@/components/ThemedText";
import {Stack} from "expo-router";
import {useState} from "react";
import {Pressable, Text, TextInput, View} from "react-native";

export default function Page() {
    const [name, setName] = useState('');
    const [dosage, setDosage] = useState('');
    const [nextDose, setNextDose] = useState('');

    return (
        <View className={'flex-1 px-2'}>
            {/* -------------------- Header -------------------- */}
            <Stack.Screen
                options={{
                    title: 'Agregar medicina',
                }}
            />
            {/* -------------------- Header -------------------- */}

            {/* -------------------- Content -------------------- */}
            <View className={'flex-col gap-4'}>

                <View>
                    <ThemedText type={'defaultSemiBold'}>Enter medicine:</ThemedText>
                    <TextInput
                        className={`
                        border-2 border-gray-300 rounded-lg p-2 w-full text-lg
                    `}
                        placeholder={'Name of the medicine'}
                        placeholderTextColor={'#999'}
                        onChangeText={text => setName(text)}
                        value={name}
                    />
                </View>

                <View>
                    <ThemedText type={'defaultSemiBold'}>Enter dosis:</ThemedText>
                    <TextInput
                        className={`
                            border-2 border-gray-300 rounded-lg p-2 w-full text-lg
                        `}
                        placeholder={'00 mg'}
                        placeholderTextColor={'#999'}
                        onChangeText={text => setDosage(text)}
                        value={dosage}
                    />
                </View>

                <View>
                    <ThemedText type={'defaultSemiBold'}>Enter next dose time:</ThemedText>
                    <TextInput
                        className={`
                            border-2 border-gray-300 rounded-lg p-2 w-full text-lg
                        `}
                        placeholder={'00:00'}
                        placeholderTextColor={'#999'}
                        onChangeText={text => setNextDose(text)}
                        value={nextDose}
                    />
                </View>

                <Pressable
                    className={`
                        justify-center items-center 
                        bg-blue-500 p-2
                        rounded-lg
                    `}
                >
                    <Text className={'text-lg font-bold uppercase text-white'}>Submit</Text>
                </Pressable>
            </View>
            {/* -------------------- Content -------------------- */}

        </View>
    );
}