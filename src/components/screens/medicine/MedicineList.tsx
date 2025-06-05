import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {cssInterop} from "nativewind";
import {Image} from "expo-image";

interface SingleMedicineCardProps {
  id: string;
  imageURI?: string;
  name: string;
  dosage: string;
  frequency: string;
  nextDose: string;
  notifications: boolean;
  alarms: boolean;
  onToggleNotification: (id: string) => void;
  onToggleAlarm: (id: string) => void;
}

interface MedicineCardsProps {
    MedicineCardsArray: SingleMedicineCardProps[];
    className?: string;
}

const StyledImage = cssInterop(Image, {
    className: 'style',
})

export function MedicineCard({
      id,
      imageURI,
      name,
      dosage,
      frequency,
      nextDose,
      notifications,
      alarms,
      onToggleNotification,
      onToggleAlarm,
    }: SingleMedicineCardProps) {

    const defaultImageURI = imageURI || 'https://static.vecteezy.com/system/resources/previews/005/259/960/non_2x/medicine-drugs-box-free-vector.jpg';

    return(
        <View style={styles.card}>

            <View style={styles.imageContainer}>
                <StyledImage source={{uri: defaultImageURI}} className={'w-[80] h-[80] rounded-xl'}/>
            </View>

            <View style={styles.infoContainer}>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.text}>{dosage}</Text>
                  <Text style={styles.text}>{frequency}</Text>
                  <Text style={styles.text}>
                      Próxima dosis: <Text style={styles.bold}>{nextDose}</Text>
                  </Text>
            </View>

            <View style={styles.iconContainer}>
                <TouchableOpacity
                    style={[styles.iconButton, notifications ? styles.active : styles.inactive]}
                    onPress={() => onToggleNotification(id)}
                >
                    <Ionicons name="notifications" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.iconButton, alarms ? styles.active : styles.inactive]}
                    onPress={() => onToggleAlarm(id)}
                >
                    <Ionicons name="alarm" size={20} color="white" />
                </TouchableOpacity>
            </View>

        </View>
    );

}

export function MedicineCards({ MedicineCardsArray, className }: MedicineCardsProps){

    const [notifications, setNotifications] = useState({});
    const [alarms, setAlarms] = useState({});

    const toggleNotification = (id) => {
        setNotifications(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleAlarm = (id) => {
        setAlarms(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <FlatList
            data={MedicineCardsArray}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <MedicineCard
                    id={item.id}
                    imageURI={item.imageURI}
                    name={item.name}
                    dosage={item.dosage}
                    frequency={item.frequency}
                    nextDose={item.nextDose}
                    notifications={notifications[item.id] ?? false}
                    alarms={alarms[item.id] ?? false}
                    onToggleNotification={toggleNotification}
                    onToggleAlarm={toggleAlarm}
                />
            )}
        />
    );
}


const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  imageContainer:{
      flexDirection: 'row',
      alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  bold: {
    fontWeight: '600',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    padding: 10,
    borderRadius: 30,
  },
  active: {
    backgroundColor: '#3b82f6',
  },
  inactive: {
    backgroundColor: '#ccc',
  },
});
