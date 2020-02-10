import React, {Component} from "react";
import {FlatList, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";
import * as Strings from "../../utils/Strings";
import {
    postProfessor,
    professorDepartmentNameChange,
    professorFamilyNameChange,
    professorFirstNameChange
} from "../../actions/index";
import Icon from "react-native-vector-icons/Ionicons";


class CreateProfessorScreen extends Component {
    constructor(props) {
        super(props);
        props.navigation.setParams({
            onSaveProfessor: this.onCreateProfessor.bind(this),
        });
    }

    onCreateProfessor() {
        this.props.postProfessor(this.props.professorFirstName,
            this.props.professorFamilyName,
            this.props.professorDepartment);
        this.props.navigation.goBack();
    }

    onFirstNameChange(text) {
        this.props.professorFirstNameChange(text);
    }

    onFamilyNameChange(text) {
        this.props.professorFamilyNameChange(text);
    }

    onDepartmentNameChange(text) {
        this.props.professorDepartmentNameChange(text);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.itemInputStyle}>
                    <TextInput
                        placeholder={Strings.PROMPT_FIRST_NAME}
                        onChangeText={this.onFirstNameChange.bind(this)}
                        value={this.props.professorFirstName}
                        blurOnSubmit={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#000000A3"
                        style={styles.inputStyle}/>
                </View>
                <View style={styles.itemInputStyle}>

                    <TextInput
                        placeholder={Strings.PROMPT_FAMILY_NAME}
                        onChangeText={this.onFamilyNameChange.bind(this)}
                        value={this.props.professorFamilyName}
                        blurOnSubmit={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#000000A3"
                        style={styles.inputStyle}/>
                </View>
                <View style={styles.itemInputStyle}>

                    <TextInput
                        placeholder={Strings.PROMPT_DEPARTMENT}
                        onChangeText={this.onDepartmentNameChange.bind(this)}
                        value={this.props.professorDepartment}
                        blurOnSubmit={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#000000A3"
                        style={styles.inputStyle}/>
                </View>
            </View>
        );
    }
}

CreateProfessorScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTitleStyle: globalStyles.headerTitleStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <Text style={{fontSize: 24, color: "#FFFFFF"}}>
            ТЕСТ
        </Text>,
    headerRight: <TouchableOpacity onPress={() => navigation.state.params.onSaveProfessor()}
                                   style={globalStyles.headerButtonContainerStyle}>
        <Icon name="ios-checkmark" color='#FFFFFF' size={40}/>
    </TouchableOpacity>
});


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin: 16,
        flexDirection: 'column',
    },
    inputStyle: {
        fontSize: 15,
        color: '#000000A3',
        padding: 6,
        flex: 1,
    },
    itemInputStyle: {
        backgroundColor: '#9B9B9B29',
        borderRadius: 12,
        marginBottom:16,
        borderWidth: 0,
        minHeight: 40,
        borderColor: 'transparent',
    },
});

const mapStateToProps = state => ({
    professorFirstName: state.professor.professorFirstName,
    professorFamilyName: state.professor.professorFamilyName,
    professorDepartment: state.professor.professorDepartment,
});

export default connect(mapStateToProps, {
    professorFirstNameChange,
    professorFamilyNameChange,
    professorDepartmentNameChange,
    postProfessor
})(CreateProfessorScreen);