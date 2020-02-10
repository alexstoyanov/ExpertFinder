import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../../utils/Styles";
import FaIcon from "react-native-vector-icons/FontAwesome";

class ProfessorItem extends Component {
    render() {
        let professor = this.props.professor;
        console.log(professor);
        return (
            <TouchableOpacity key={String.valueOf(professor.professorId)} style={styles.itemStyle} onPress={() => this.props.onProfessorItemClick(professor)}>
                <View style={styles.dataStyle}>
                    <Text style={globalStyles.titleTextStyle}>
                        <FaIcon name="child" color="#000" size={14}/> {professor.firstName + " " + professor.lastName}
                    </Text>
                    <Text style={globalStyles.textStyle}>
                        <FaIcon name="book" color="#0000008A" size={14}/> {professor.department}
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
        justifyContent:'center',
    },
    professorInfoStyle:{
        color:'#000000DE',
        fontSize: 16,
    }
});

export default ProfessorItem