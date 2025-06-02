import { View, FlatList } from "react-native";
import { ThemedText } from "@/components/ThemedText";

const weekDays = [
  { day: "Lunes", percentage: Math.floor(Math.random() * 101) },
  { day: "Martes", percentage: Math.floor(Math.random() * 101) },
  { day: "Miercoles", percentage: Math.floor(Math.random() * 101) },
  { day: "Jueves", percentage: Math.floor(Math.random() * 101) },
  { day: "Viernes", percentage: Math.floor(Math.random() * 101) },
  { day: "Sabado", percentage: Math.floor(Math.random() * 101) },
  { day: "Domingo", percentage: Math.floor(Math.random() * 101) },
];

const WeeklyProgressComponent = () => {
  return (
    <View className="h-auto flex-1 border-2 p-4 dark:border-2 dark:border-white rounded-xl">
      <FlatList
        data={weekDays}
        keyExtractor={(item) => item.day}
        renderItem={({ item }) => (
          <View className="w-full flex flex-row justify-between">
            <ThemedText className="">{item.day}</ThemedText>
            <ThemedText className=" text-right">{item.percentage}%</ThemedText>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View className="h-px bg-gray-500 w-full" />
        )}
      />
    </View>
  );
};

export default WeeklyProgressComponent;
