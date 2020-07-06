import React, {Component} from "react";
import {FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {getProfessors, navigateCreateProfessor} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";
import ListItem from "./ProfessorItem";
import Icon from "react-native-vector-icons/Ionicons";
import * as Strings from "../../utils/Strings";
import FaIcons5 from "react-native-vector-icons/FontAwesome5";

class ProfessorsListScreen extends Component {
    constructor(props) {
        super(props);
        props.navigation.setParams({
            navigateAddProfessor: navigateCreateProfessor,
        });
    }

    componentDidMount() {
        this.props.getProfessors();
    }

    onProfessorItemPress(professor) {
        console.log(professor);
        this.props.navigation.goBack();
    }

    keyExtractor = (item, index) => index.toString();

    render(props) {
        return (
            <View style={styles.containerStyle}>
                <FlatList
                    removeClippedSubviews={false}
                    keyExtractor={this.keyExtractor}
                    data={this.props.professors}
                    renderItem={({item}) => <ListItem
                        onProfessorItemClick={this.onProfessorItemPress.bind(this)}
                        professor={item}/>}
                />
            </View>
        );
    }
}

ProfessorsListScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
    headerLeft: <View style={globalStyles.emptyHeaderButtonContainerStyle}/>,
    headerTitle:
        <View style={globalStyles.headerTitleContainerStyle}>
            <FaIcons5 style={globalStyles.headerIconStyle} name="chalkboard-teacher" size={20} color="white"/>
            <Text style={globalStyles.headerTitleStyle}>
                {Strings.PROFESSORS}
            </Text>
        </View>,
    headerRight:
        <TouchableOpacity style={{paddingLeft: 16, paddingRight: 16}}
                          onPress={() => navigation.getParam("navigateAddProfessor")()}>
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
    professors: state.professor.professors
});

export default connect(mapStateToProps, {getProfessors, navigateCreateProfessor})(ProfessorsListScreen);