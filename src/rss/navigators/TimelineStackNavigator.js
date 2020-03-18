import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {globalStyles} from "../../utils/Styles";
import TimelineScreen from "../components/TimelineScreen";
import TimelineItemDetailsScreen from "../components/TimelineItemDetailsScreen";
import CreateItemScreen from "../components/CreateItemScreen";

export const TimelineStackNavigator = createStackNavigator ({
    TimelineHome:{
        screen: TimelineScreen,
    },
    TimelineItemDetail:{
        screen: TimelineItemDetailsScreen
    },
    CreateRssItem:{
        screen: CreateItemScreen
    },
}, {
    headerMode: 'float',
});


TimelineStackNavigator.navigationOptions = ({navigation}) => ({
    header:null,
});

export default TimelineStackNavigator;