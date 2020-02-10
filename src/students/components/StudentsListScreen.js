import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import {
    getStudents,
    assignStudentOffer,
    navigateCreateStudent
} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";
import * as MockDataUtils from "../../utils/MockDataUtils";
import ListItem from "./StudentItem";
import * as Strings from "../../utils/Strings";

class StudentsListScreen extends Component {
    constructor(props){
        super(props);
        props.navigation.setParams({
            navigateAddStudent: navigateCreateStudent,
        });
    }

    componentDidMount() {
        this.props.getStudents();
    }

    onStudentItemPress(student) {
        let professorId = 1;
        this.props.assignStudentOffer(this.props.navigation.getParam("offerId"), professorId, student.studentId);
        this.props.navigation.goBack();
    }

    keyExtractor = (item, index) => index.toString();

    render(props) {
        return (
            <View style={styles.containerStyle}>
                <FlatList
                    removeClippedSubviews={false}
                    keyExtractor={this.keyExtractor}
                    data={this.props.students}
                    renderItem={({item}) => <ListItem
                        onStudentItemClick={this.onStudentItemPress.bind(this)}
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
        <TouchableOpacity style={{paddingLeft: 16, paddingRight: 16}}
                          onPress={() => navigation.getParam("navigateAddStudent")()}>
            <Icon style={globalStyles.headerIconStyle} name="ios-add" color='#FFFFFF' size={30}/>
        </TouchableOpacity>
});

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
    },
});

const mapStateToProps = state => ({
    students: state.offer.students
});

export default connect(mapStateToProps, {getStudents, assignStudentOffer})(StudentsListScreen);