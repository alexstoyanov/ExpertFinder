import {createStackNavigator} from 'react-navigation-stack';
import React, {Component} from "react";
import OfferDetailsScreen from "../rss/components/OfferDetailsScreen";
import QRCodeScannerScreen from "../qr/components/QRCodeScannerScreen";
import CreateOfferScreen from "../offers/components/CreateOfferScreen";
import StudentsListScreen from "../offers/components/StudentsListScreen";
import TimelineItemDetailsScreen from "../rss/components/TimelineItemDetailsScreen";
import MainTabNavigator from "./MainTabNavigator";

export default createStackNavigator({
    Home: {
        screen: MainTabNavigator,
    },
    OfferDetail: {
        screen: OfferDetailsScreen,
    },
    TimelineItemDetail:{
        screen: TimelineItemDetailsScreen
    },
    QRCode: {
        screen: QRCodeScannerScreen,
    },
    CreateOffer:{
        screen: CreateOfferScreen,

    },
    AllStudents: {
        screen: StudentsListScreen,
    }
},{
    defaultNavigationOptions:{
        headerBackTitle:null,
    },
});