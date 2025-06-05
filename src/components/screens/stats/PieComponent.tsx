import { ThemedText } from "@/components/ThemedText";
import { View, Image } from "react-native";

const PieComponent = () => {
  return (
    <View className="w-96 h-1/4 mx-auto border-2 dark:border-[#ffffff] p-4 rounded-xl flex flex-row gap-4">
      <Image
        source={require("@/assets/stats/pieChart.png")}
        className="h-full w-1/2 object-contain"
        resizeMode="contain"
      />

      <View className="h-auto flex justify-center">
        <ThemedText>- Cumplimiento</ThemedText>
        <ThemedText>- No Cumplimiento</ThemedText>
      </View>
    </View>
  );
};

export default PieComponent;