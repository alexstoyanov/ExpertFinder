import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginScreen from "../login/components/LoginScreen";
import React, {Component} from "react";
import AppStack from "./AppStack";
import AuthLoadingScreen from "../login/components/AuthLoadingScreen";
import {createStackNavigator} from 'react-navigation-stack';

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

const MainStackNavigator = createStackNavigator(
    {
        MainSwitch: {
            screen: MainSwitchNavigator,
            path: "launch"
        }
    },
    {
        defaultNavigationOptions:{
            headerMode: 'none',
            header: null
        }
    }
);

const LaunchSwitchNavigator = createAppContainer(MainStackNavigator);

export default LaunchSwitchNavigator