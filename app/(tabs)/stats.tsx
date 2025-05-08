import {StyleSheet, View, Text} from "react-native";
import {ThemedText} from "@/components/ThemedText";

export default function Page() {
  return (
      <View style={styles.container}>
        <ThemedText>Stats Screen</ThemedText>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});