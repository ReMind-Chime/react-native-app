import {ThemedText} from "@/components/ThemedText";
import {MedCards} from "@/app/(tabs)/home/meds-cards";
import {useState} from "react";
import {MainView} from "@/components/MainView";

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
        <MainView className="flex-cols gap-4">
            <ThemedText type={'title'}>Medicina para hoy:</ThemedText>
            <MedCards MedCardsArray={meds}/>
        </MainView>
    );
}