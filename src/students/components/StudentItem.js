import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import FaIcon from "react-native-vector-icons/FontAwesome";
import {globalStyles} from "../../utils/Styles";

class StudentItem extends Component {
    render() {
        let student = this.props.student;
        console.log(student);
        return (
            <TouchableOpacity key={String.valueOf(student.studentId)} style={styles.itemStyle}
                              onPress={() => this.props.onStudentItemClick(student)}>
                <View style={styles.dataStyle}>
                    <Text style={globalStyles.titleTextStyle}>
                        <FaIcon name="child" color="#000" size={14}/> {student.firstName + " " + student.lastName}
                    </Text>
                    <Text style={globalStyles.textStyle}>
                        <FaIcon name="book" color="#0000008A" size={14}/> {student.specialty}
                    </Text>
                    <Text style={globalStyles.textStyle}>
                        <FaIcon name="id-card" color="#0000008A" size={14}/> {student.facultyNumber}
                    </Text>
                </View>
                <View style={globalStyles.separatorStyle}/>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    dataStyle: {
        padding: 16,
        justifyContent: 'center',
    },
    studentInfoStyle: {
        color: '#000000DE',
        fontSize: 16,
    }
});

export default StudentItem