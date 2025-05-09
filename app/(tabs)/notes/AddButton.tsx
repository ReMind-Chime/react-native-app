import { TouchableOpacity, StyleSheet, View } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";

export function AddButton({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <IconSymbol name="plus" size={28} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#6200ea",
    borderRadius: 60,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
});