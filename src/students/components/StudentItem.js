import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import FaIcon from "react-native-vector-icons/FontAwesome";
import {globalStyles} from "../../utils/Styles";

class StudentItem extends Component {
    render() {
        let student = this.props.student;
        console.log(student);
        return (
            <TouchableOpacity key={String.valueOf(student.studentId)} onPress={() => this.props.onStudentItemClick(student)}>
                <View style={styles.itemStyle}>
                    <Image
                        style={{marginLeft:16, width: 40, height: 40, borderRadius: 25}}
                        source={{uri: 'https://pics.me.me/wat-memes-50659641.png'}}
                    />
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
                </View>
                <View style={globalStyles.separatorStyle}/>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    dataStyle: {
        justifyContent: 'center',
        padding:16,
    },
    studentInfoStyle: {
        color: '#000000DE',
        fontSize: 16,
    },
    itemStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default StudentItem