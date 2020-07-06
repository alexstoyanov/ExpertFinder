import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
    ImageBackground
} from 'react-native';
import {connect} from "react-redux";
import AsyncStorage from '@react-native-community/async-storage';
import {
    setToken,
} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";

class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        // This will switch to the App components or Auth components and this loading
        // components will be unmounted and thrown away.
        if(userToken){
            this.props.setToken(userToken);
            this.props.navigation.navigate('MainTabsSwitch');
        }else{
            this.props.navigation.navigate('Auth');
        }
    };

    // Render any loading content that you like here
    render() {
        return (
            <ImageBackground
                source={require('./images/loginBackground.jpg')} imageStyle={{opacity:0.5}}
                style={globalStyles.spinnerContainerStyle} forceInset={{top: "always", bottom: 'always'}}>

                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps,{
    setToken
})(AuthLoadingScreen);
