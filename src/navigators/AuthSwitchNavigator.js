import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginScreen from "../login/components/LoginScreen";
import React, {Component} from "react";
import AppStack from "./AppStack";
import AuthLoadingScreen from "../login/components/AuthLoadingScreen";

const MainSwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: LoginScreen,
        App: AppStack
    },
    {
        initialRouteName: 'AuthLoading',
        defaultNavigationOptions:{
            headerMode: 'none',
            header: null
        }
    }
);

const LaunchSwitchNavigator = createAppContainer(MainSwitchNavigator);

export default LaunchSwitchNavigator