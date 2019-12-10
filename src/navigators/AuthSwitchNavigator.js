import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginScreen from "../login/components/LoginScreen";
import React, {Component} from "react";
import AppStack from "./AppStack";

const MainSwitchNavigator = createSwitchNavigator(
    {
        App: AppStack,
        Auth: LoginScreen
    },
    {
        initialRouteName: 'Auth',
        defaultNavigationOptions:{
            headerMode: 'none',
            header: null
        }
    }
);

const LaunchSwitchNavigator = createAppContainer(MainSwitchNavigator);

export default LaunchSwitchNavigator;
