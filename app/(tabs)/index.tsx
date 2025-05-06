import { SafeAreaView, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";
import '@/global.css'

export default function Page() {
    return (
        <SafeAreaView className="flex-1 relative">
            {/* Contenido */}
            <View className="flex-1 p-5">
                <Text className="text-lg">Medicina para hoy:</Text>
            </View>

            {/* Botón flotante */}
            <Link href="/" asChild>
                <Pressable
                    style={{
                        position: "absolute",
                        bottom: 75,
                        right: 15,
                        width: 48,
                        height: 48,
                        backgroundColor: "#3B82F6",
                        borderRadius: 24,
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        zIndex: 50,
                    }}
                    onPress={() => console.log("Ir a Settings")}
                >
                    <IconSymbol name="plus" color="black" size={28} />
                </Pressable>
            </Link>
        </SafeAreaView>
    );
}
