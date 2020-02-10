import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {globalStyles} from "../../utils/Styles";
import SettingsScreen from "../components/SettingsScreen";

export const SettingsStackNavigator = createStackNavigator ({
    SettingsHome:{
        screen: SettingsScreen
    },
}, {
    headerMode: 'float',
});


SettingsStackNavigator.navigationOptions = ({navigation}) => ({
    header:null,
});

export default SettingsStackNavigator;