import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {connect} from "react-redux";
import * as Strings from "../utils/Strings";
import * as Constants from "../utils/Constants";
import {deleteUserFcmToken, logoutUser, navigateLogin,} from "../actions/index"
import {bindActionCreators} from "redux";
import AuthSwitchNavigator from "./AuthSwitchNavigator";
import NavigationService from "../actions/NavigationService";
import AsyncStorage from '@react-native-community/async-storage';
import DropdownAlert from 'react-native-dropdownalert';
import {globalColors} from "../utils/Colors";

export class AppWithNavigationState extends Component {

    render() {
        let message = null;
        if (this.props.error) {
            message = this.props.error;
            this.dropdown.alertWithType('error', Strings.FAIL, message);
        } else if (this.props.success) {
            message = this.props.success;
            this.dropdown.alertWithType('success', message, '');
        }

        return (
            <View style={styles.container}>
                <View style={styles.statusBar}>
                    <StatusBar barStyle="light-content"/>
                </View>
                <AuthSwitchNavigator
                    uriPrefix={Platform.OS === 'ios' ? "shkolo://" : "shkolo://shkolo"}
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}/>
                <DropdownAlert closeInterval={5000}
                               ref={ref => this.dropdown = ref} />
                <DropdownAlert closeInterval={0}
                               panResponderEnabled={false}
                               tapToCloseEnabled={false}
                               ref={reference => this.noYearDataAlert = reference} />
            </View>
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props.forceLogout && prevProps.forceLogout != this.props.forceLogout) {
            AsyncStorage.getItem('@' + Constants.SHKOLO_STORE + ':' + Constants.TOKEN).then((token) => {
                if (token) {
                    this.logoutUserAndClearData();
                }
            });
        }
    }

    logoutUserAndClearData() {
        this.props.logoutUser();
        navigateLogin();
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        deleteUserFcmToken,
        logoutUser
    }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);