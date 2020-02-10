import React from 'react';
import {ActivityIndicator, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {connect} from "react-redux";
import SimIcon from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Strings from "../../utils/Strings";
import {Container, Content} from "native-base";
import {
    navigateLogin,
    logoutUser
} from "../../actions/index";
import AsyncStorage from '@react-native-community/async-storage';
import {globalStyles} from "../../utils/Styles";

class SettingsScreen extends React.Component {

    logoutUserAndClearData() {
        this.props.logoutUser();
        AsyncStorage.removeItem('userToken').then((token) => {
            navigateLogin();
        });
    }

    // Render any loading content that you like here
    render() {
        return (
            <Container>
                <Content style={{backgroundColor: '#FFFFFF'}}>
            <View style={styles.listContainerStyle}>
                <TouchableOpacity>
                    <View style={styles.listItemStyle}>

                        <Text style={globalStyles.titleTextStyle}>
                            <MaterialIcons name="translate" color='#000000' size={16}/> {Strings.LANGUAGE}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.bigSeparatorStyle}/>
                <TouchableOpacity onPress={() => {
                    this.logoutUserAndClearData()
                }}>
                    <View style={styles.listItemStyle}>
                        <Text style={globalStyles.titleTextStyle}>
                            <SimIcon name="settings" color='#000000' size={16}/> {Strings.LOG_OUT}
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
                </Content>
            </Container>
        );
    }
}



SettingsScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <Text style={globalStyles.headerTitleStyle}>
            {Strings.MORE}
        </Text>,
});

const styles = StyleSheet.create({
    dateContainerStyle: {
        borderRadius: 12,
        backgroundColor: '#FFFFFF30',
        height: 40
    },
    listContainerStyle: {
        flexDirection: 'column',
    },
    listItemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    separatorStyle: {
        backgroundColor: '#00000029',
        height: 1,
        marginLeft: 56,
    },
    bigSeparatorStyle: {
        height: 8,
        backgroundColor: '#E5E5E5'
    },
    iconStyle: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    }
});

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps, {
    logoutUser
})(SettingsScreen);
