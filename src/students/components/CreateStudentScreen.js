import React, {Component} from "react";
import {FlatList, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";
import * as Strings from "../../utils/Strings";
import {
    postStudent,
    studentDepartmentNameChange,
    studentFamilyNameChange,
    studentFirstNameChange,
    studentFacultyNumChange
} from "../../actions/index";
import Icon from "react-native-vector-icons/Ionicons";

class CreateStudentScreen extends Component {
    constructor(props) {
        super(props);
        props.navigation.setParams({
            onSaveStudent: this.onCreateStudent.bind(this),
        });
    }

    onCreateStudent() {
        this.props.postStudent(this.props.studentFacultyNumber,
            this.props.studentFirstName,
            this.props.studentFamilyName,
            this.props.studentDepartment);
        this.props.navigation.goBack();
    }

    onFirstNameChange(text) {
        this.props.studentFirstNameChange(text);
    }

    onFamilyNameChange(text) {
        this.props.studentFamilyNameChange(text);
    }

    onDepartmentNameChange(text) {
        this.props.studentDepartmentNameChange(text);
    }

    onFacultyNumChange(text) {
        this.props.studentFacultyNumChange(text);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.itemInputStyle}>
                    <TextInput
                        placeholder={Strings.PROMPT_FACULTY_NUMBER}
                        onChangeText={this.onFacultyNumChange.bind(this)}
                        value={this.props.studentFacultyNumber}
                        blurOnSubmit={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#000000A3"
                        style={styles.inputStyle}/>
                </View>
                <View style={styles.itemInputStyle}>
                    <TextInput
                        placeholder={Strings.PROMPT_FIRST_NAME}
                        onChangeText={this.onFirstNameChange.bind(this)}
                        value={this.props.studentFirstName}
                        blurOnSubmit={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#000000A3"
                        style={styles.inputStyle}/>
                </View>
                <View style={styles.itemInputStyle}>

                    <TextInput
                        placeholder={Strings.PROMPT_FAMILY_NAME}
                        onChangeText={this.onFamilyNameChange.bind(this)}
                        value={this.props.studentFamilyName}
                        blurOnSubmit={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#000000A3"
                        style={styles.inputStyle}/>
                </View>
                <View style={styles.itemInputStyle}>

                    <TextInput
                        placeholder={Strings.PROMPT_DEPARTMENT}
                        onChangeText={this.onDepartmentNameChange.bind(this)}
                        value={this.props.studentDepartment}
                        blurOnSubmit={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#000000A3"
                        style={styles.inputStyle}/>
                </View>
            </View>
        );
    }
}

CreateStudentScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTitleStyle: globalStyles.headerTitleStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <Text style={{fontSize: 24, color: "#FFFFFF"}}>
            ТЕСТ
        </Text>,
    headerRight: <TouchableOpacity onPress={() => navigation.state.params.onSaveStudent()}
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
    studentFacultyNumber: state.student.studentFacultyNumber,
    studentFirstName: state.student.studentFirstName,
    studentFamilyName: state.student.studentFamilyName,
    studentDepartment: state.student.studentDepartment,
});

export default connect(mapStateToProps, {
    studentFirstNameChange,
    studentFamilyNameChange,
    studentDepartmentNameChange,
    postStudent,
    studentFacultyNumChange
})(CreateStudentScreen);