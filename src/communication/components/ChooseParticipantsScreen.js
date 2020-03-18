import React, {Component} from "react";
import {FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {globalStyles} from "../../utils/Styles";
import ChooseParticipantItem from "./ChooseParticipantItem";
import {
    deleteSelectedParticipant,
    findParticipants,
    selectParticipant,
    getStudents
} from "../../actions/index";
import SafeAreaView from 'react-native-safe-area-view';
import Icon from "react-native-vector-icons/Ionicons";

let visibleUsers = [];

class ChooseParticipantsScreen extends Component {
    constructor() {
        super();
        this.onParticipantItemPressed = this.onParticipantItemPress.bind(this);
    }

    componentDidMount(){
        this.props.getStudents();
    }

    queryParticipants(query, visibleUsers) {
        if (query === undefined || query === '') {
            return visibleUsers;
        }

        //RegExp(pattern[, flags]). First trim the query and add 'i' flag which means ignore case
        query = query.trim();
        let queryArr = query.split(" ");
        if (queryArr.length === 1) {
            return visibleUsers.filter((participant) => {
                    return (participant.firstName && query && participant.firstName.toLowerCase().includes(query.toLowerCase()))
                        || (participant.lastName && query && participant.lastName.toLowerCase().includes(query.toLowerCase()))
                        || (participant.name && query && participant.name.toLowerCase().includes(query.toLowerCase()))
                }
            );
        } else {
            return visibleUsers.filter((participant) => {
                return (participant.firstName && queryArr[0] && participant.firstName.toLowerCase().includes(queryArr[0].toLowerCase())
                    && participant.lastName && queryArr[1] && participant.lastName.toLowerCase().includes(queryArr[1].toLowerCase()))
                    || (participant.firstName && queryArr[1] && participant.firstName.toLowerCase().includes(queryArr[1].toLowerCase())
                        && participant.lastName && queryArr[0] && participant.lastName.toLowerCase().includes(queryArr[0].toLowerCase()))
                    || (participant.name && participant.name.toLowerCase().includes(queryArr[0].toLowerCase())
                        && participant.name && participant.name.toLowerCase().includes(queryArr[1].toLowerCase()));
            });
        }
    }

    renderSelectedParticipants() {
        let selectedParticipants = this.props.selectedParticipants;
        let selectedView = [];
        for (let participant of selectedParticipants) {
            let participantNames = participant.firstName + " " + participant.lastName;
            selectedView.push(
                <TouchableOpacity onPress={() => {
                    this.onParticipantItemPress(participant);
                }} style={styles.selectedParticipantContainerStyle} key={participant.facultyNumber}>
                    <Text style={styles.selectedParticipantTextStyle}>
                        {
                            participantNames
                        }
                    </Text>
                    <View style={[globalStyles.crossContainerStyle, {marginRight:4, marginLeft: 8}]}>
                        <Icon name='ios-close'
                              size={20}
                              color='white'/>
                    </View>
                </TouchableOpacity>
            )
            ;
        }
        return (
            selectedView.length > 0 ? selectedView : <View/>
        );
    }

    render() {
        let query = this.props.participantsQuery;
        const participants = this.queryParticipants(query, this.props.students);
        return (
            <View style={styles.containerStyle}>
                <View style={styles.headerStyle}>
                    <TextInput style={styles.searchBarStyle}
                               placeholder="Търсене на потребител или група"
                               onChangeText={text => this.props.findParticipants(text)}
                               value={this.props.participantsQuery}
                    />
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack();
                    }}
                                      style={globalStyles.headerButtonContainerStyle}>
                        <Icon name="ios-checkmark" color='#000000' size={35}/>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} scroll contentContainerStyle={{flex:1}}
                            style={styles.selectedParticipantsScrollStyle}>
                    {this.renderSelectedParticipants()}
                </ScrollView>
                <FlatList
                    removeClippedSubviews={false}
                    keyExtractor={this.keyExtractor}
                    extraData={this.props.selectedParticipants}
                    data={participants}
                    renderItem={({item}) => <ChooseParticipantItem
                        existingParticipantIndex={
                            this.props.selectedParticipants.findIndex(x => x.facultyNumber == item.facultyNumber)
                        }
                        onPress={this.onParticipantItemPressed} participant={item}/>}
                />
            </View>
        );
    }

    keyExtractor = (item, index) => index.toString();

    onParticipantItemPress(participant) {
        let existingParticipantIndex = this.props.selectedParticipants.findIndex(x => x.facultyNumber == participant.facultyNumber);
        if (existingParticipantIndex > -1) {
            this.props.deleteSelectedParticipant(existingParticipantIndex);
        } else {
            this.props.selectParticipant(participant);
        }
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
    },
    selectedParticipantContainerStyle: {
        paddingLeft: 4,
        paddingRight: 4,
        marginRight: 4,
        marginLeft: 4,
        backgroundColor: '#0084FD',
        borderRadius: 16,
        alignItems: 'center',
        flexDirection: 'row'
    },
    selectedParticipantTextStyle: {
        color: 'white',
        marginLeft: 8,
    },
    headerStyle: {
        flexDirection: 'row',
        marginTop:16,
        height: 40
    },
    searchBarStyle: {
        borderRadius: 28,
        flex: 1,
        paddingLeft: 16,
        marginLeft: 16,
        paddingRight: 16,
        backgroundColor: '#F2F3F5',
        justifyContent: "center"
    },
    selectedParticipantsScrollStyle: {
        padding: 16,
        minHeight: 64
    }
});

ChooseParticipantsScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTitleStyle: globalStyles.headerTitleStyle,
    headerTintColor: "#FFF",
    headerBackTitle: null,
});

const mapStateToProps = state => ({
    selectedParticipants: state.communication.selectedParticipants,
    students: state.student.students,
    participantsQuery: state.communication.participantsQuery,
});

export default connect(mapStateToProps, {
    findParticipants,
    deleteSelectedParticipant,
    selectParticipant,
    getStudents
})(ChooseParticipantsScreen);