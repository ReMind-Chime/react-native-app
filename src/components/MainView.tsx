import {Platform, View} from "react-native";
import {cn} from "@/utils/tailwind-merge";

export function MainView({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <View
            className={cn(
                'flex-1 p-5 mb-[80]',
                {'mb-[20]': Platform.OS === 'ios'},
                className,
            )}
        >
            {children}
        </View>
    );

}