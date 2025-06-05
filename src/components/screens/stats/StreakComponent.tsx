import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";

const StreakComponent = () => {
  return (
    <View className="w-96 h-1/4 mx-auto border-2 dark:border-[#ffffff] p-4 rounded-xl flex flex-col items-center justify-center">
      <ThemedText className="text-center text-lg font-bold mb-4">
        Racha{" "}
      </ThemedText>
    </View>
  );
};

export default StreakComponent;
