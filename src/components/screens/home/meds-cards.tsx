import {FlatList, Text, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {Image} from "expo-image";
import {Checkbox} from "expo-checkbox";
import {useState} from "react";
import {cssInterop} from "nativewind";
import {cn} from "@/utils/tailwind-merge";

interface SingleMedCardProps {
    id?: string;
    imageURI?: string;
    med: string;
    dosage: string;
    nextDose: string;
}

interface MedCardsProps {
    MedCardsArray: SingleMedCardProps[];
    className?: string;
}

// This is a workaround to use nativewind with expo-image
const StyledImage = cssInterop(Image, {
    className: 'style',
})

export function MedCard({ card }: { card: SingleMedCardProps } ) {
    const defaultImageURI = card.imageURI || 'https://static.vecteezy.com/system/resources/previews/005/259/960/non_2x/medicine-drugs-box-free-vector.jpg';
    const [checked, setChecked] = useState(false);

    return (
        <View className={'flex-row justify-between p-2 px-4 gap-4'}>

            <View className={'flex-row items-center gap-2'}>
                <StyledImage source={{uri: defaultImageURI}} className={'w-[80] h-[80] rounded-xl'}/>
                <View className={'flex-col py-2 justify-between'}>
                    <ThemedText type={'subtitle'}>{card.med}</ThemedText>
                    <Text className={'text-gray-600 text-xl'}>{card.dosage}</Text>
                </View>
            </View>

            <View className={'flex-row justify-center items-center gap-2 w-1/3'}>
                <Checkbox value={checked} onValueChange={setChecked}/>
                <ThemedText>{card.nextDose}</ThemedText>
            </View>
        </View>
    );
}

export function MedCards({MedCardsArray, className}: MedCardsProps) {
    let index = 0;

    return (
        <FlatList
            className={cn(
                'flex-1',
                className,
            )}
            data={MedCardsArray}
            renderItem={({item}) => (
                <MedCard card={item} />
            )}
            keyExtractor={(item) => {
                if (item.id === undefined) {
                    index++;
                    return index.toString();
                }
                return item.id;
            }}
        />
    );
}