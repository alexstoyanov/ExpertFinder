import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import StudentOffersScreen from "../components/StudentOffersScreen";
import StudentOfferDetailsScreen from "../components/StudentOfferDetailsScreen";

export const StudentOffersStackNavigator = createStackNavigator ({
    StudentOffersHome:{
        screen: StudentOffersScreen
    },
    StudentOfferDetails:{
        screen: StudentOfferDetailsScreen
    },
}, {
    headerMode: 'float',
});


StudentOffersStackNavigator.navigationOptions = ({navigation}) => ({
    header:null,
});

export default StudentOffersStackNavigator;