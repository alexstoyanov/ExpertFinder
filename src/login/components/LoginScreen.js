import React, {Component} from "react";
import {Image, Platform, ScrollView, StyleSheet, ImageBackground, View, Text, ActivityIndicator, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {
    emailChange,
    loginUser,
    passwordChange,
    toggleEmailFieldFocus,
    togglePasswordFieldFocus,
    togglePasswordFieldVisible,
    navigateHome,
    showErrorMessage,
    setToken
} from "../../actions/index";
import {Button, Container, Content, Input, Item} from "native-base";
import * as Constants from "../../utils/Constants";
import * as Strings from "../../utils/Strings";
import {globalColors} from "../../utils/Colors";
import AsyncStorage from '@react-native-community/async-storage';
import { sha256 } from 'react-native-sha256';

class LoginScreen extends Component {
    onEmailChange(text) {
        this.props.emailChange(text);
    }

    onPasswordChange(text) {
        this.props.passwordChange(text);
    }

    onEmailFieldFocus() {
        this.props.toggleEmailFieldFocus(true);
    }

    onPasswordFieldFocus() {
        this.props.togglePasswordFieldFocus(true);
    }

    onEmailFieldBlur() {
        this.props.toggleEmailFieldFocus(false);
    }

    onPasswordFieldBlur() {
        this.props.togglePasswordFieldFocus(false);
    }

    async onLoginButtonPress(email, password) {
        //TODO Integrate WS for login with hashed pass
        sha256("sasho").then( hash => {
            console.log(hash);
        });
        if (email && password && email !== "" && password !== "") {
            if(email === "teacher" && password === "teacher"){
                await AsyncStorage.setItem('userToken', 'ProfessorToken');
                this.props.setToken('ProfessorToken');
                navigateHome();
            } else if(email ==="student" && password === "student"){
                await AsyncStorage.setItem('userToken', 'StudentToken');
                this.props.setToken('StudentToken');
                navigateHome();
            } else if(email ==="admin" && password === "admin"){
                await AsyncStorage.setItem('userToken', 'AdminToken');
                this.props.setToken('StudentToken');
                navigateHome();
            }
        } else {
            this.props.showErrorMessage(Strings.FAIL_EMPTY_USER_PASS);
        }
    }

    _onLogin = async () => {
        try {
            let tokens = await azureAuth.webAuth.authorize({scope: 'openid profile User.Read Mail.Read'});
            let info = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: 'me'});
            this.onMicrosoftLoginSuccess(info, tokens.accessToken);
        } catch (error) {
        }
    };

    render() {
        return (

            <ImageBackground
                source={require('./images/loginBackground.jpg')} imageStyle={{opacity:0.2}}
                style={{flex: 1}} forceInset={{top: "always", bottom: 'always'}}>
                <ScrollView style={styles.containerStyle}>
                    <View style={styles.loginFormStyle}>
                        <Text style={styles.promptStyle}>{Strings.PROMPT_EMAIL}</Text>
                        <Item rounded
                              style={[styles.itemInputStyle, this.props.isEmailFieldActive ?
                                  {borderColor: '#00000070'} : {borderColor: 'transparent'}]}>
                            <Input onChangeText={this.onEmailChange.bind(this)}
                                   placeholder={Strings.PROMPT_EMAIL}
                                   onFocus={this.onEmailFieldFocus.bind(this)}
                                   onBlur={this.onEmailFieldBlur.bind(this)}
                                   autoCapitalize='none'
                                   blurOnSubmit={true}
                                   autoCorrect={false}
                                   placeholderTextColor="#00000070"
                                   style={styles.inputStyle}/>
                        </Item>
                        <Text style={styles.promptStyle}>{Strings.PROMPT_PASSWORD}</Text>
                        <Item rounded
                              style={[styles.itemInputStyle, this.props.isPasswordFieldActive ?
                                  {borderColor: '#00000070'} : {borderColor: 'transparent'}]}>
                            <Input onChangeText={this.onPasswordChange.bind(this)}
                                   value={this.props.password}
                                   secureTextEntry={!this.props.isPasswordFieldVisible}
                                   autoCorrect={false}
                                   onFocus={this.onPasswordFieldFocus.bind(this)}
                                   autoCapitalize='none'
                                   onBlur={this.onPasswordFieldBlur.bind(this)}
                                   placeholder={Strings.PROMPT_ENTER_PASSWORD}
                                   blurOnSubmit={true}
                                   placeholderTextColor="#00000070"
                                   style={styles.inputStyle}/>
                            <TouchableOpacity
                                style={{paddingLeft: 16, paddingRight: 8}}
                                onPress={() => this.props.togglePasswordFieldVisible(!this.props.isPasswordFieldVisible)}>
                            </TouchableOpacity>

                        </Item>
                        <Button rounded onPress={() => this.onLoginButtonPress(this.props.email, this.props.password)}
                                style={{marginTop: 32, height: 36}} success block>
                            <Text style={{fontSize: 15, color: 'white'}}>
                                {Strings.LOGIN}
                            </Text>
                        </Button>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }

}

LoginScreen.navigationOptions = ({navigation}) => ({
    header: null
});

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 90,
    },
    logoStyle: {
        width: 202,
        height: 32,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    loginFormStyle: {
        padding: 16,
        alignItems: 'center',
        marginTop: 55
    },
    itemInputStyle: {
        borderRadius: 12,
        backgroundColor: '#BBBBBB30',
        height: 40
    },
    forgotPasswordStyle: {
        fontSize: 12,
        color: 'white'
    },
    forgotPasswordTouchableStyle: {
        alignSelf: 'flex-end',
        paddingTop: 8
    },
    loginSeparatorStyle: {
        flexDirection: 'row',
        padding: 4,
        marginTop: 16,
        alignItems: 'center'
    },
    socialButtonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 40,
        margin: 16,
    },
    socialButtonsContainerStyle: {
        flexDirection: 'row',
        padding: 4,
        marginTop: 8,
        alignItems: 'center'
    },
    promptStyle: {
        alignSelf: 'flex-start',
        fontSize: 12,
        marginTop: 10,
        padding: 4,
        color: '#000000A3'
    },
    socialLogoStyle: {
        height: 20,
        resizeMode: 'contain',
    },
    inputStyle: {
        color: '#000000A3',
        fontSize: 15
    }
});

const mapStateToProps = ({auth}) => {
    const {token, userLoginAttempts, users, email, password, loading, isEmailFieldActive, isPasswordFieldActive, isPasswordFieldVisible} = auth;
    return {
        token,
        userLoginAttempts,
        users,
        email,
        password,
        loading,
        isEmailFieldActive,
        isPasswordFieldActive,
        isPasswordFieldVisible
    };
};

export default connect(mapStateToProps, {
    loginUser,
    showErrorMessage,
    emailChange,
    passwordChange,
    toggleEmailFieldFocus,
    togglePasswordFieldFocus,
    togglePasswordFieldVisible,
    setToken
})(LoginScreen);