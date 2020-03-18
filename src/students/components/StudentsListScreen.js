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

class StudentsListScreen extends Component {
    constructor(props){
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
                        onStudentItemClick={() => {}}
                        student={item}/>}
                />
            </View>
        );
    }
}

StudentsListScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <Text style={globalStyles.headerTitleStyle}>
            {Strings.STUDENTS}
        </Text>,
    headerRight:
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{paddingLeft: 16, paddingRight: 16}}
                              onPress={() => navigation.getParam("navigateAddMultipleStudents")()}>
                <AntDesignIcon name="addusergroup" color='#FFFFFF' size={30}/>
            </TouchableOpacity>
        <TouchableOpacity style={{paddingLeft: 16, paddingRight: 16}}
                          onPress={() => navigation.getParam("navigateAddStudent")()}>
            <AntDesignIcon name="adduser" color='#FFFFFF' size={28}/>
        </TouchableOpacity>
        </View>
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