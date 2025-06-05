import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { MedicineCards } from "@/components/screens/medicine/MedicineList";
import { AddButton } from "@/components/screens/medicine/AddButton";

const initialMedicines = [
  {
      id: '1',
      name: 'Loratadina',
      dosage: '10 mg',
      frequency: 'Cada 8 horas',
      nextDose: '3:00 p.m.',
  },
    {
      id: '2',
      name: 'Ibuprofeno',
      dosage: '600 mg',
      frequency: 'Cada 8 horas',
      nextDose: '4:20 p.m.',
  },
    {
      id: '3',
      name: 'Amoxicilina/Ácido Clavulánico',
      dosage: '875 mg / 125 mg',
      frequency: 'Cada 12 horas',
      nextDose: '7:15 p.m.',
  },
];

export default function Page() {
    const [meds, setMeds] = useState(initialMedicines);

    return (
        <View style={styles.container}>
              <View style={styles.container2}>
                <MedicineCards MedicineCardsArray={meds} />
              </View>

              <View style={styles.addButtonWrapper}>
                  <AddButton/>
              </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
      flex: 1,
      flexDirection: 'column',
      padding: 20,
      gap: 16,
  },
  addButtonWrapper: {
    position: "absolute",
    bottom: 70,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
