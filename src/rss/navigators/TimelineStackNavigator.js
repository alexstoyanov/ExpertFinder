import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {globalStyles} from "../../utils/Styles";
import TimelineScreen from "../components/TimelineScreen";

export const TimelineStackNavigator = createStackNavigator ({
    TimelineHome:{
        screen: TimelineScreen,
    },
}, {
    headerMode: 'float',
});


TimelineStackNavigator.navigationOptions = ({navigation}) => ({
    header:null,
});

export default TimelineStackNavigator;