import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {globalStyles} from "../../utils/Styles";
import OffersScreen from "../components/OffersScreen";
import CreateOfferScreen from "../components/CreateOfferScreen";
import FilterOffersScreen from "../components/FilterOffersScreen";

export const OffersStackNavigator = createStackNavigator ({
    OffersHome:{
        screen: OffersScreen
    },
    CreateOffer:{
        screen: CreateOfferScreen,
    },
    FilterOffers:{
        screen: FilterOffersScreen,
    }
}, {
    headerMode: 'float',
});


OffersStackNavigator.navigationOptions = ({navigation}) => ({
    header:null,
});

export default OffersStackNavigator;