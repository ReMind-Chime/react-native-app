import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Link } from "expo-router";
import { Pressable, SafeAreaView, View } from "react-native";

export default function Page() {
    return (
        <SafeAreaView className="flex-1 relative">
            {/* Contenido */}
            <View className="flex-1 p-5">
                <ThemedText type={'title'}>Medicina para hoy:</ThemedText>
            </View>

            {/* Botón flotante */}
            <Link href="/(tabs)/home" asChild>
                <Pressable
                    className={`
                        absolute bottom-[75] right-[15] z-10
                        w-[48] h-[48]
                        justify-center items-center
                        bg-[#3B82F6] rounded-full
                    `}
                >
                    <IconSymbol name="plus" color="black" size={28} />
                </Pressable>
            </Link>
        </SafeAreaView>
    );
}
