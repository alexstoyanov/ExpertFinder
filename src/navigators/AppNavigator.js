import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {connect} from "react-redux";
import * as Strings from "../utils/Strings";
import * as Constants from "../utils/Constants";
import {logoutUser, navigateLogin,} from "../actions/index"
import {bindActionCreators} from "redux";
import AuthSwitchNavigator from "./AuthSwitchNavigator";
import NavigationService from "../actions/NavigationService";
import AsyncStorage from '@react-native-community/async-storage';
import {globalColors} from "../utils/Colors";
import SafeAreaView from 'react-native-safe-area-view';

export class AppWithNavigationState extends Component {
    componentDidUpdate(prevProps) {
        console.log(prevProps);
        if (this.props.forceLogout && prevProps.forceLogout != this.props.forceLogout) {
            AsyncStorage.getItem('userToken').then((token) => {
                if (token) {
                    this.logoutUserAndClearData();
                }
            });
        }
    }
    shouldComponentUpdate(){
        console.log(this.props);
        return true;
    }

    logoutUserAndClearData() {
        this.props.logoutUser();
        navigateLogin();
    }

    render() {
        console.log(this.props);
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.statusBar}>
                    <StatusBar barStyle="light-content"/>
                </View>
                <AuthSwitchNavigator
                    uriPrefix={Platform.OS === 'ios' ? "shkolo://" : "shkolo://shkolo"}
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}/>
            </SafeAreaView>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColors.primaryColor,
    },
    statusBar: {
        backgroundColor: globalColors.primaryColor,
    },
});

const mapStateToProps = state => ({
    nav: state.nav,
    error: state.errors.error,
    success: state.errors.success,
    forceLogout: state.auth.forceLogout,
});

function mapDispatchToProps(dispatch) {
    return Object.assign({dispatch: dispatch}, bindActionCreators({
        logoutUser
    }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);