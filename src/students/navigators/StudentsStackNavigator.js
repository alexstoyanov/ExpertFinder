import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {globalStyles} from "../../utils/Styles";
import StudentsListScreen from "../components/StudentsListScreen";
import CreateStudentScreen from "../components/CreateStudentScreen";

export const StudentsStackNavigator = createStackNavigator ({
    ProfessorsHome:{
        screen: StudentsListScreen
    },
    CreateStudent:{
        screen: CreateStudentScreen,
    }
}, {
    headerMode: 'float',
});


StudentsStackNavigator.navigationOptions = ({navigation}) => ({
    header:null,
});

export default StudentsStackNavigator;