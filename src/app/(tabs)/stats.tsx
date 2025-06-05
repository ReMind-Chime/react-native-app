import { View } from "react-native";
import {OmissionsComponent, PieComponent, StreakComponent, WeeklyProgressComponent} from "@/components/screens/stats";

export default function StatsPage() {
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