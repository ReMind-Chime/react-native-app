import {Pressable, View} from "react-native";
import {Image} from "expo-image";
import {ThemedText} from "@/components/ThemedText";
import {IconSymbol} from "@/components/ui/IconSymbol";
import {cssInterop} from "nativewind";

interface UserProps {
    user: {
        name: string;
        email: string;
        image: string;
    }
    logout?: () => void;
}

const StyledImage = cssInterop(Image, {
    className: 'style',
});

export function UserSection({user, logout}: UserProps) {
    return (
        <View className={'flex-row items-center justify-between'}>
            <View className={'flex-row items-center justify-between gap-4'}>
                <StyledImage source={{uri: user.image}} className={'w-[60] h-[60] rounded-xl'}/>
                <View>
                    <ThemedText type={'subtitle'}>{user.name}</ThemedText>
                    <ThemedText>{user.email}</ThemedText>
                </View>
            </View>
            <Pressable onPress={logout}>
                <IconSymbol name={'rectangle.portrait.and.arrow.right'} color={'#000'} size={36}/>
            </Pressable>
        </View>
    );
}