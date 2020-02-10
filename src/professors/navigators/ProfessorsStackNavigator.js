import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {globalStyles} from "../../utils/Styles";
import ProfessorsListScreen from "../components/ProfessorsListScreen";
import CreateProfessorScreen from "../components/CreateProfessorScreen";

export const ProfessorsStackNavigator = createStackNavigator ({
    ProfessorsHome:{
        screen: ProfessorsListScreen
    },
    CreateProfessor:{
        screen: CreateProfessorScreen,
    }
}, {
    headerMode: 'float',
});


ProfessorsStackNavigator.navigationOptions = ({navigation}) => ({
    header:null,
});

export default ProfessorsStackNavigator;