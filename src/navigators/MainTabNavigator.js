import React from "react";
import {View, Text, TouchableOpacity} from "react-native"
import {createBottomTabNavigator} from "react-navigation-tabs";
import MainTabBar from "../components/MainTabBar";
import TimelineScreen from "../rss/components/TimelineScreen";
import OfferDetailsScreen from "../rss/components/OfferDetailsScreen";
import OffersScreen from "../offers/components/OffersScreen";
import {globalStyles} from "../utils/Styles";
import {globalColors} from "../utils/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import * as Strings from "../utils/Strings";
import SettingsScreen from "../settings/screen/SettingsScreen";
import {connect} from "react-redux";

const MainTabNavigator = createBottomTabNavigator({
    Timeline: {
        screen: TimelineScreen,
    },
    Offers: {
        screen: OffersScreen,
    },
    More: {
        screen: SettingsScreen,
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
    }
});

MainTabNavigator.navigationOptions = ({navigation}) => {
    let currentTabParams = navigation.state.routes[navigation.state.index].params;
    return ({
        headerStyle: globalStyles.headerStyle,
        headerTitleStyle: globalStyles.headerTitleStyle,
        headerTintColor: globalColors.headerTintColor,
        headerTitle:
            <View style={globalStyles.headerTitleContainerStyle}>
                <Text style={globalStyles.headerTitleStyle}>
                    <Text style={{
                        fontSize: 24,
                        color: '#FFFFFF',
                        marginRight: 4
                    }}>
                        {
                            navigation.state.index == 0 ?
                                Strings.HOME :
                                navigation.state.index == 1 ?
                                    Strings.OFFERS :
                                        Strings.MORE

                        }
                    </Text>
                </Text>
            </View>,
        headerRight:
        navigation.state.index == 1 && currentTabParams && currentTabParams.showAddBtn ?
            <TouchableOpacity style={{paddingLeft:16, paddingRight: 16}} onPress={() => currentTabParams.navigateAddOffer()}>
                <Icon style={globalStyles.headerIconButtonStyle} name="ios-add" color='#FFFFFF' size={35}/>
            </TouchableOpacity> :
        <View/>,
    })
};

const mapStateToProps = state => ({
    token: state.auth.token
});

export default connect(mapStateToProps)(MainTabNavigator);