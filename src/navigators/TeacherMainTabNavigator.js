import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs";
import MainTabBar from "../components/MainTabBar";
import SettingsScreen from "../settings/components/SettingsScreen";
import SettingsStackNavigator from "../settings/navigators/SettingsStackNavigator";
import OffersStackNavigator from "../offers/navigators/OffersStackNavigator";
import CommunicationStackNavigator from "../communication/navigators/CommunicationStackNavigator";
import TimelineStackNavigator from "../rss/navigators/TimelineStackNavigator";

const TeacherMainTabNavigator = createBottomTabNavigator({
    Timeline: {
        screen: TimelineStackNavigator,
    },
    Offers: {
        screen: OffersStackNavigator,
    },
    More: {
        screen: SettingsStackNavigator
    }
}, {
    swipeEnabled: false,
    backBehavior: 'none',
    lazy: true,
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarComponent: MainTabBar,
    showIcon: true,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#0091ea',
        inactiveTintColor: 'gray',
        indicatorStyle: {
            backgroundColor: '#0091ea'
        },
        style: {
            backgroundColor: 'white',
        },
    }
});

TeacherMainTabNavigator.navigationOptions = ({navigation}) => ({
    header: null,
});

export default TeacherMainTabNavigator;