import {createStackNavigator} from 'react-navigation-stack';
import React, {Component} from "react";
import TimelineScreen from "../timeline/TimelineScreen";
import OfferDetailsScreen from "../timeline/OfferDetailsScreen";

export default createStackNavigator({
    Timeline: {
        screen: TimelineScreen,
    },
    OfferDetail: {
        screen: OfferDetailsScreen,
    },
},{
    defaultNavigationOptions:{
        header:null,
        headerMode:null,
    },
});