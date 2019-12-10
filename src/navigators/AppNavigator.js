import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "../login/components/LoginScreen";

const AppNavigator = createStackNavigator({
    Home: {
        screen: LoginScreen,
    },
});

export default createAppContainer(AppNavigator);