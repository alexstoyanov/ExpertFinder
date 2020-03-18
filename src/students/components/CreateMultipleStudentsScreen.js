import React, {Component} from "react";
import {
    FlatList,
    Image,
    Platform,
    StyleSheet,
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions
} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";
import * as Strings from "../../utils/Strings";
import {
    postStudent,
    studentMultipleJSONChange
} from "../../actions/index";
import Icon from "react-native-vector-icons/Ionicons";


class CreateMultipleStudentScreen extends Component {
    constructor(props) {
        super(props);
        props.navigation.setParams({
            onSaveStudent: this.onCreateStudent.bind(this),
        });
    }

    tryParseJSON(jsonString) {
        try {
            let o = JSON.parse(jsonString);
            if (o && typeof o === "object") {
                return o;
            }
        }
        catch (e) {
        }
        return false;
    }

    onCreateStudent() {
        let parsedJSON = this.tryParseJSON(this.props.studentMultipleJSON);
        if (parsedJSON) {
            for (let user of parsedJSON) {
                this.props.postStudent(user.facultyNumber,
                    user.firstName,
                    user.lastName,
                    user.specialty);
            }
            this.props.navigation.goBack();
        } else {
            Alert.alert("Невалиден формат на JSON")
        }
    }

    onJSONChanged(text) {
        this.props.studentMultipleJSONChange(text);
    }

    render() {
        let screenHeight = Dimensions.get('window').height;
        return (
            <View style={styles.containerStyle}>
                <View style={[styles.itemInputStyle, {minHeight: screenHeight * (2 / 3)}]}>
                    <TextInput
                        placeholder={Strings.PROMPT_JSON}
                        onChangeText={this.onJSONChanged.bind(this)}
                        value={this.props.studentMultipleJSON}
                        blurOnSubmit={false}
                        multiline={true}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#000000A3"
                        style={[styles.inputStyle, {minHeight: screenHeight * (2 / 3)}]}/>
                </View>
            </View>
        );
    }
}

CreateMultipleStudentScreen.navigationOptions = ({navigation}) => ({
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
        marginBottom: 16,
        borderWidth: 0,
        minHeight: 240,
        borderColor: 'transparent',
    },
});

const mapStateToProps = state => ({
    studentMultipleJSON: state.student.studentMultipleJSON,
});

export default connect(mapStateToProps, {
    postStudent,
    studentMultipleJSONChange
})(CreateMultipleStudentScreen);