import {Switch, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {MainView} from "@/components/MainView";
import {useState} from "react";
import {UserSection} from "@/app/(tabs)/settings/components";
import {IconSymbol} from "@/components/ui/IconSymbol";

const exampleUser = {
    name: 'Juan Perez',
    email: 'example@example.com',
    image: 'https://freesvg.org/img/abstract-user-flat-4.png',
}

const testlogout = () => {
    console.log('Logout');
}

export default function Page() {
    const [user, setUser] = useState(exampleUser);
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [alarmsEnabled, setAlarmsEnabled] = useState(false);

    return (
        <MainView className={'flex-col justify-between gap-4 p-4'}>

            <View>
                <View>
                    <ThemedText type={'title'} className={'mb-2'}>Cuenta</ThemedText>
                    <UserSection user={user} logout={testlogout}/>
                </View>

                <View>
                    <ThemedText type={'title'} className={'mb-2'}>Notificaciones</ThemedText>

                    <View className={'flex-row items-center justify-between'}>
                        <ThemedText type={'subtitle'}>Notificaciones de actividad</ThemedText>
                        <Switch
                            value={notificationsEnabled}
                            onValueChange={setNotificationsEnabled}
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                        />
                    </View>

                    <View className={'flex-row items-center justify-between'}>
                        <ThemedText type={'subtitle'}>Alarmas</ThemedText>
                        <Switch
                            value={alarmsEnabled}
                            onValueChange={setAlarmsEnabled}
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={alarmsEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                        />
                    </View>
                </View>
            </View>

            <View className={'gap-2'}>
                <View className={'flex-row items-center gap-2'}>
                    <IconSymbol name={'questionmark.circle'} color={'black'} size={20}/>
                    <ThemedText>Ayuda</ThemedText>
                    <IconSymbol name={'chevron.right'} color={'black'} size={20}/>
                </View>

                <View className={'flex-row items-center gap-2'}>
                    <IconSymbol name={'star.fill'} color={'black'} size={20}/>
                    <ThemedText>Califícanos</ThemedText>
                    <IconSymbol name={'chevron.right'} color={'black'} size={20}/>
                </View>
            </View>
        </MainView>
    )
}