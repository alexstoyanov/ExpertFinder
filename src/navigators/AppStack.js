import {createStackNavigator} from 'react-navigation-stack';
import React, {Component} from "react";
import OfferDetailsScreen from "../offers/components/OfferDetailsScreen";
import CreateOfferScreen from "../offers/components/CreateOfferScreen";
import StudentsListScreen from "../students/components/StudentsListScreen";
import TimelineItemDetailsScreen from "../rss/components/TimelineItemDetailsScreen";
import MainTabNavigator from "./StudentMainTabNavigator";
import MainTabsSwitch from "./MainTabsSwitch";
import CreateProfessorScreen from "../professors/components/CreateProfessorScreen";

export default createStackNavigator({
    MainTabsSwitch: {
        screen: MainTabsSwitch,
    },
},{
    defaultNavigationOptions:{
        header:null,
    },
});