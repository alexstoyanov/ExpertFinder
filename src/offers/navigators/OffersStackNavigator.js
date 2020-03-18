import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {globalStyles} from "../../utils/Styles";
import OffersScreen from "../components/OffersScreen";
import CreateOfferScreen from "../components/CreateOfferScreen";
import FilterOffersScreen from "../components/FilterOffersScreen";
import OfferDetailsScreen from "../components/OfferDetailsScreen";
import SelectStudentScreen from "../components/SelectStudentScreen";

export const OffersStackNavigator = createStackNavigator ({
    OffersHome:{
        screen: OffersScreen
    },
    CreateOffer:{
        screen: CreateOfferScreen,
    },
    FilterOffers:{
        screen: FilterOffersScreen,
    },
    OfferDetail: {
        screen: OfferDetailsScreen,
    },
    AllStudents: {
        screen: SelectStudentScreen,
    },
}, {
    headerMode: 'float',
});


OffersStackNavigator.navigationOptions = ({navigation}) => ({
    header:null,
});

export default OffersStackNavigator;