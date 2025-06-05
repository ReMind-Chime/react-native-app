import { TouchableOpacity, StyleSheet, View } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Link } from "expo-router";

export function AddButton() {
  return (
    <Link href="/medicineform" style={styles.button}>
      <IconSymbol name="plus" size={28} color="#ffffff" />
    </Link>
  );
}

const styles = StyleSheet.create({
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