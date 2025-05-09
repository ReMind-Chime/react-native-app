import {ThemedText} from "@/components/ThemedText";
import {View} from "react-native";
import {MedCards} from "@/app/(tabs)/home/meds-cards";
import {useEffect, useState} from "react";

const array = [
    {
        med: 'Paracetamol',
        dosage: '500mg',
        nextDose: '12:00',
    },
    {
        med: 'Ibuprofeno',
        dosage: '400mg',
        nextDose: '14:00',
    },
    {
        med: 'Amoxicilina',
        dosage: '250mg',
        nextDose: '16:00',
    },
    {
        med: 'Omeprazol',
        dosage: '20mg',
        nextDose: '18:00',
    },
    {
        med: 'Loratadina',
        dosage: '10mg',
        nextDose: '20:00',
    },
    {
        med: 'Metformina',
        dosage: '500mg',
        nextDose: '22:00',
    },
    {
        med: 'Atorvastatina',
        dosage: '10mg',
        nextDose: '24:00',
    },
    {
        med: 'Aspirina',
        dosage: '100mg',
        nextDose: '02:00',
    },
    {
        med: 'Simvastatina',
        dosage: '20mg',
        nextDose: '04:00',
    },
    {
        med: 'Clopidogrel',
        dosage: '75mg',
        nextDose: '06:00',
    },
]

export default function Page() {
    const [meds, setMeds] = useState(array);

    return (
        <View className="flex-1">

            {/* Contenido */}
            <View className="flex-1 flex-cols gap-4 p-5">
                <ThemedText type={'title'}>Medicina para hoy:</ThemedText>
                <MedCards MedCardsArray={meds}/>
            </View>

        </View>
    );
}