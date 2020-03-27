import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {globalStyles} from "../../utils/Styles";
import OffersScreen from "../components/OffersScreen";
import CreateOfferScreen from "../components/CreateOfferScreen";
import FilterOffersScreen from "../components/FilterOffersScreen";
import OfferDetailsScreen from "../components/OfferDetailsScreen";
import SelectStudentScreen from "../components/SelectStudentScreen";
import StudentProfileScreen from "../../students/components/StudentProfileScreen";
import MessagesListScreen from "../../communication/components/MessagesListScreen";
import MessageThreadDetailsScreen from "../../communication/components/MessageThreadDetailsScreen";

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
    OfferMessages: {
        screen: MessagesListScreen,
        navigationOptions: {
            headerBackTitle: null
        }
    },
    StudentProfile: {
        screen: StudentProfileScreen,
    },
    ThreadDetails: {
        screen: MessageThreadDetailsScreen,
        navigationOptions: {
            headerBackTitle: null
        }
    },
}, {
    headerMode: 'float',
});


OffersStackNavigator.navigationOptions = ({navigation}) => ({
    header:null,
});

export default OffersStackNavigator;