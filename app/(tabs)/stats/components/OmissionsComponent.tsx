import { View, FlatList, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";

const omissionsData = [
  {
    medication: "Loratadina",
    date: new Date(2025, 2, 6, 7, 0, 0),
    img: require("../assets/loratadina.png"),
  },
  {
    medication: "Ibuprofeno",
    date: new Date(2025, 2, 6, 8, 20, 0),
    img: require("../assets/ibuprofeno.png"),
  },
];

const OmissionsComponent = () => {
  return (
    <View className="h-auto flex-1 border-2 p-4 dark:border-2 dark:border-white rounded-xl">
      <FlatList
        data={omissionsData}
        keyExtractor={(item) => item.medication}
        renderItem={({ item }) => (
          <View className="h-12 p-2 flex flex-row">
            <Image
              source={item.img}
              className="h-full w-1/4"
              resizeMode="contain"
            />

            <View>
              <ThemedText className="text-lg font-bold">
                {item.medication}
              </ThemedText>
              <ThemedText className="text-sm">
                {`${item.date.getDate()}/${item.date.toLocaleString("es-ES", { month: "long" })} ${item.date.getHours()}:${item.date.getMinutes()}`}
              </ThemedText>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View className="m-1" />}
        ListHeaderComponent={() => (
          <ThemedText className="text-lg font-bold">Omisiones</ThemedText>
        )}
      />
    </View>
  );
};

export default OmissionsComponent;
