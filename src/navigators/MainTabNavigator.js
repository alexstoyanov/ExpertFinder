import React from "react";
import {View, Text, TouchableOpacity} from "react-native"
import {createBottomTabNavigator} from "react-navigation-tabs";
import MainTabBar from "../components/MainTabBar";
import TimelineScreen from "../rss/components/TimelineScreen";
import OfferDetailsScreen from "../offers/components/OfferDetailsScreen";
import OffersScreen from "../offers/components/OffersScreen";
import {globalStyles} from "../utils/Styles";
import {globalColors} from "../utils/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import * as Strings from "../utils/Strings";
import SettingsScreen from "../settings/components/SettingsScreen";
import {connect} from "react-redux";
import TimelineStackNavigator from "../rss/navigators/TimelineStackNavigator";
import OffersStackNavigator from "../offers/navigators/OffersStackNavigator";
import SettingsStackNavigator from "../settings/navigators/SettingsStackNavigator";

const MainTabNavigator = createBottomTabNavigator({
    Timeline: {
        screen: TimelineStackNavigator,
    },
    Offers: {
        screen: OffersStackNavigator,
    },
    More: {
        screen: SettingsStackNavigator,
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

MainTabNavigator.navigationOptions = ({navigation}) => ({
    header: null,
});

const mapStateToProps = state => ({
    token: state.auth.token
});

export default connect(mapStateToProps)(MainTabNavigator);