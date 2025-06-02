import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import PieComponent from "./components/PieComponent";
import WeeklyProgressComponent from "./components/WeeklyProgressComponent";
import OmissionsComponent from "./components/OmissionsComponent";
import StreakComponent from "./components/StreakComponent";

export default function Page() {
  return (
    <View className="w-full h-full flex flex-col gap-4 dark:border-2 dark:border-blue-300 mt-4">
      <PieComponent />

      <View className="mx-auto h-60 w-96 flex flex-row gap-4 justify-between rounded-xl">
        <WeeklyProgressComponent />
        <OmissionsComponent />
      </View>

      <StreakComponent />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
