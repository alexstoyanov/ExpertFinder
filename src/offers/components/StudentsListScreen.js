import React, {Component} from "react";
import {Image, Platform, View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import {
    getStudents,
    assignStudentOffer,
} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";
import * as MockDataUtils from "../../utils/MockDataUtils";
import ListItem from "./StudentItem";

class StudentsListScreen extends Component {
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
    headerTitleStyle: globalStyles.headerTitleStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerTitle:
        <Text style={{fontSize: 24, color: "#FFFFFF"}}>
            ТЕСТ
        </Text>
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