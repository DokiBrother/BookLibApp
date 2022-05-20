import React from "react";
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, COLORS } from "../constants";
import { Setting, Category, FindBook, Profile} from "../screens/";
import HomeGuest from "../screens/HomeGuest";
import SettingGuest from "../screens/SettingGuest";

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
        backgroundColor: COLORS.black
    }
}

const TabGuest = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray;

                    switch (route.name) {
                        case "HomeGuest":
                            return (
                                <Image
                                    source={icons.dashboard_icon2}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Search":
                            return (
                                <Image
                                    source={icons.search_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Category":
                            return (
                                <Image
                                    source={icons.category_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "SettingGuest":
                            return (
                                <Image
                                    source={icons.setting_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                    }
                }
            })}
        >
            <Tab.Screen
                name="HomeGuest"
                component={HomeGuest}
            />
            <Tab.Screen
                name="Search"
                component={FindBook}
            />
            <Tab.Screen
                name="Category"
                component={Category}
            />
            <Tab.Screen
                name="SettingGuest"
                component={SettingGuest}
            />
        </Tab.Navigator>
    )
}

export default TabGuest;