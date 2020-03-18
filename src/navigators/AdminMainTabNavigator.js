import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs";
import MainTabBar from "../components/MainTabBar";
import SettingsScreen from "../settings/components/SettingsScreen";
import SettingsStackNavigator from "../settings/navigators/SettingsStackNavigator";
import OffersStackNavigator from "../offers/navigators/OffersStackNavigator";
import ProfessorsStackNavigator from "../professors/navigators/ProfessorsStackNavigator";
import StudentsStackNavigator from "../students/navigators/StudentsStackNavigator";
import TimelineStackNavigator from "../rss/navigators/TimelineStackNavigator";

const AdminMainTabNavigator = createBottomTabNavigator({
    Timeline: {
        screen: TimelineStackNavigator
    },
    Professors: {
        screen: ProfessorsStackNavigator,
    },
    Students: {
        screen: StudentsStackNavigator,
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

AdminMainTabNavigator.navigationOptions = ({navigation}) => ({
    header: null,
});

export default AdminMainTabNavigator;