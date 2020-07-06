import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import {
    getStudents,
    assignStudentOffer,
    navigateCreateStudent,
    navigateCreateMultipleStudents
} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";
import * as MockDataUtils from "../../utils/MockDataUtils";
import ListItem from "./StudentItem";
import * as Strings from "../../utils/Strings";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FaIcons from "react-native-vector-icons/FontAwesome";
import ActionButton from 'react-native-action-button';

class StudentsListScreen extends Component {
    constructor(props) {
        super(props);
        props.navigation.setParams({
            navigateAddStudent: navigateCreateStudent,
            navigateAddMultipleStudents: navigateCreateMultipleStudents,
        });
    }

    componentDidMount() {
        this.props.getStudents();
    }

    keyExtractor = (item, index) => index.toString();

    render(props) {
        console.log(this.props.students);
        return (
            <View style={styles.containerStyle}>
                <FlatList
                    removeClippedSubviews={false}
                    keyExtractor={this.keyExtractor}
                    data={this.props.students}
                    renderItem={({item}) => <ListItem
                        onStudentItemClick={() => {
                        }}
                        student={item}/>}
                />

                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#3498db' title={Strings.NEW_STUDENT} onPress={() => navigateCreateStudent()}>
                        <AntDesignIcon name="adduser" color='#FFFFFF' size={28}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#9b59b6' title={Strings.NEW_STUDENTS}
                                       onPress={() => navigateCreateMultipleStudents()}>
                        <AntDesignIcon name="addusergroup" color='#FFFFFF' size={30}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}

StudentsListScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerLeft: <View style={globalStyles.emptyHeaderButtonContainerStyle}/>,
    headerTitle:
        <View style={globalStyles.headerTitleContainerStyle}>
            <FaIcons style={globalStyles.headerIconStyle} name="group" size={20} color="white"/>
            <Text style={globalStyles.headerTitleStyle}>
                {Strings.STUDENTS}
            </Text>
        </View>,
    headerRight:<View style={globalStyles.emptyHeaderButtonContainerStyle}/>,
});

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
    },
});

const mapStateToProps = state => ({
    students: state.student.students
});

export default connect(mapStateToProps, {getStudents, assignStudentOffer})(StudentsListScreen);