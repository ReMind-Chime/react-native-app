import {Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab';
import {IconSymbol} from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {

    const index = [
        {
            title: 'Home',
            name: 'home/index',
            icon: 'house.fill',
        },
        {
            title: 'Medicine',
            name: 'medicine/index',
            icon: 'bandage',
        },
        {
            title: 'Notes',
            name: 'notes/index',
            icon: 'square.and.pencil',
        },
        {
            title: 'Stats',
            name: 'stats/index',
            icon: 'chart.bar',
        },
        {
            title: 'Settings',
            name: 'settings/index',
            icon: 'gear',
        },
    ]

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'white',
                headerShown: true,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: {
                    backgroundColor: '#E4A9A9',
                    position: 'absolute',
                    height: Platform.OS === 'ios' ? 80 : 60,
                },
            }}
        >
            {index.map((item) => (
                <Tabs.Screen
                    key={item.name}
                    name={item.name}
                    options={{
                        title: item.title,
                        tabBarLabelPosition: 'beside-icon',
                        tabBarShowLabel: false,
                        tabBarIcon: ({color}) => (
                            <IconSymbol
                                name={item.icon as any}
                                color={color}
                                size={28}
                            />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
}
