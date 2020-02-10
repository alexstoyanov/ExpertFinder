import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {navigateTeacherHome, navigateLogin, sendUserFcmToken} from "../actions/index";
import {connect} from "react-redux";
import AsyncStorage from '@react-native-community/async-storage';
import * as Constants from "../utils/Constants";

class MainTabSwitcher extends Component {
    async componentDidMount() {
        await await AsyncStorage.getItem('userToken').then((userToken) => {
            if (userToken) {
                console.log(userToken);
                if (userToken.includes('Professor')) {
                    this.props.navigation.navigate('TeacherHome');
                } else if(userToken.includes('Student')) {
                    this.props.navigation.navigate('StudentHome');
                } else if(userToken.includes('Admin')) {
                    this.props.navigation.navigate('AdminHome');
                }
            }
        });
    }

    render() {
        const {containerStyle, logoStyle} = styles;

        return (
            <View style={styles.containerStyle}>
            </View>

        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoStyle: {
        width: 202,
        height: 32,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
};

const mapStateToProps = ({props}) => {
    return {
        props: props
    };
};

export default connect(mapStateToProps, {
    navigateTeacherHome,
    navigateLogin,
    sendUserFcmToken,
})(MainTabSwitcher);
