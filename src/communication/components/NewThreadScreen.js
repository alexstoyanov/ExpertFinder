import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Content, Item, Picker, Text} from "native-base";
import {
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
    Dimensions,
    Platform,
    Switch,
    ScrollView
} from "react-native";
import * as Strings from "../../utils/Strings";
import {globalStyles} from "../../utils/Styles";
import {globalColors} from "../../utils/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import {
    findParticipants,
    selectParticipant,
    clearCreateMessageThread,
    sendMessageThread,
    navigateMessagesList,
    navigateChooseParticipantsScreen,
    setShouldUpdateThreads,
    subjectChange,
    messageBodyChange,
    toggleForbidResponses,
    toggleHideParticipants,
    resetNewMessageThread,
    deleteSelectedParticipant,
} from "../../actions/index";
import SafeAreaView from 'react-native-safe-area-view';
import update from 'immutability-helper';

let visibleUsers = [];

class NewThreadScreen extends Component {
    constructor(props) {
        super(props);
        props.navigation.setParams({
            saveThread: this.saveThread.bind(this),
        });
    }

    saveThread() {
        let messageThread = {};

        if (this.props.subject !== '' && this.props.messageBody !== '' && this.props.selectedParticipants
                .length > 0) {
            messageThread.id = new Date().getTime(),
            messageThread.subject = this.props.subject;
            messageThread.messages = [{
                _id: new Date().getTime(),
                text: this.props.messageBody,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "Ivan Trendafilov"
                }
            }];
            let recipients = [];
            for (let selectedParticipant of this.props.selectedParticipants) {
                recipients.push(selectedParticipant.facultyNumber.toString());
            }
            messageThread.recipients = recipients;
            let newMessageThreads = update(this.props.messageThreads, {$push: [messageThread]});
            this.props.sendMessageThread(newMessageThreads);
        } else {
            Alert.alert(
                'Грешка',
                'Изберете участници, въведете тема и съобщение',
                [
                    {
                        text: 'OK', onPress: () => {
                    }
                    },
                ],
                {cancelable: false}
            )
        }
    }

    queryParticipants(query, visibleUsers) {
        if (query === undefined || query === '') {
            return [];
        }

        //RegExp(pattern[, flags]). First trim the query and add 'i' flag which means ignore case
        query = query.trim();
        let queryArr = query.split(" ");
        if (queryArr.length === 1) {
            return visibleUsers.filter((participant) => {
                    return (participant.first_name && query && participant.first_name.toLowerCase().includes(query.toLowerCase()))
                        || (participant.last_name && query && participant.last_name.toLowerCase().includes(query.toLowerCase()))
                        || (participant.name && query && participant.name.toLowerCase().includes(query.toLowerCase()))
                }
            );
        } else {
            return visibleUsers.filter((participant) => {
                return (participant.first_name && queryArr[0] && participant.first_name.toLowerCase().includes(queryArr[0].toLowerCase())
                    && participant.last_name && queryArr[1] && participant.last_name.toLowerCase().includes(queryArr[1].toLowerCase()))
                    || (participant.first_name && queryArr[1] && participant.first_name.toLowerCase().includes(queryArr[1].toLowerCase())
                        && participant.last_name && queryArr[0] && participant.last_name.toLowerCase().includes(queryArr[0].toLowerCase()))
                    || (participant.name && participant.name.toLowerCase().includes(queryArr[0].toLowerCase())
                        && participant.name && participant.name.toLowerCase().includes(queryArr[1].toLowerCase()));
            });
        }
    }

    render(props) {
        let query = this.props.participantsQuery;
        const deviceWidth = Dimensions.get("window").width;
        let selectedParticipantsView = this.renderSelectedParticipants();
        return (
            <Container style={styles.containerStyle}>
                <Content>
                    <Text style={styles.promptStyle}>{Strings.RECIPIENTS}</Text>
                    <Item rounded
                          style={styles.itemInputStyle}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}
                                    contentContainerStyle={styles.selectedParticipantsScrollStyle}>
                            <TouchableOpacity onPress={() => navigateChooseParticipantsScreen()}
                                              style={{flexDirection: 'row', minWidth: deviceWidth}}>
                                {selectedParticipantsView && selectedParticipantsView.length > 0 ?
                                    selectedParticipantsView :
                                    <Text style={styles.inputStyle}>
                                        {Strings.PROMPT_RECIPIENTS}
                                    </Text>
                                }
                            </TouchableOpacity>
                        </ScrollView>
                    </Item>
                    <Text style={styles.promptStyle}>{Strings.SUBJECT}</Text>
                    <Item rounded
                          style={styles.itemInputStyle}>
                        <TextInput
                            placeholder={Strings.PROMPT_SUBJECT}
                            onChangeText={this.onSubjectChange.bind(this)}
                            value={this.props.subject}
                            blurOnSubmit={true}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#000000A3"
                            style={styles.inputStyle}/>
                    </Item>
                    <Text style={styles.promptStyle}>{Strings.MESSAGE}</Text>
                    <Item rounded
                          style={styles.itemInputStyle}>
                        <TextInput
                            onChangeText={this.onBodyChange.bind(this)}
                            value={this.props.messageBody}
                            placeholder={Strings.PROMPT_MESSAGE}
                            blurOnSubmit={true}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#000000A3"
                            multiline={true}
                            style={styles.inputStyle}/>
                    </Item>
                </Content>
            </Container>
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props.newMessageThread && prevProps.newMessageThread !== this.props.newMessageThread && this.props.newMessageThread.id) {
            navigateMessagesList(this.props.newMessageThread.id, this.props.newMessageThread.subject);
            this.props.resetNewMessageThread();
        }
    }

    onSubjectChange(text) {
        this.props.subjectChange(text);
    }

    onBodyChange(text) {
        this.props.messageBodyChange(text);
    }

    renderSelectedParticipants() {
        let selectedParticipants = this.props.selectedParticipants;
        let selectedView = [];
        for (let participant of selectedParticipants) {
            let participantNames = participant.firstName + " " + participant.lastName;
            selectedView.push(
                <View style={styles.selectedContainerStyle} key={participant.id}>
                    <Text style={{marginLeft: 6, color: "white"}}>
                        {
                            participantNames
                        }
                    </Text>
                    <TouchableOpacity onPress={() => {
                        this.onRemoveParticipantItemPress(participant)
                    }}
                                      style={styles.removeParticipantButtonStyle}>
                        <View style={[globalStyles.crossContainerStyle, {marginLeft: 0}]}>
                            <Icon name='ios-close'
                                  size={20}
                                  color='white'/>
                        </View>
                    </TouchableOpacity>
                </View>
            )
            ;
        }
        return (
            selectedView.length > 0 ? selectedView : <View/>
        );
    }

    onRemoveParticipantItemPress(participant) {
        let existingParticipantIndex = this.props.selectedParticipants.findIndex(x => x.id == participant.id);
        if (existingParticipantIndex > -1) {
            this.props.deleteSelectedParticipant(existingParticipantIndex);
        }
    }

}

NewThreadScreen.navigationOptions = ({navigation}) => ({
    headerStyle: globalStyles.headerStyle,
    headerTintColor: globalColors.headerTintColor,
    headerBackTitle: null,
    headerTitle:
        <Text style={{fontSize: 17, color: "#FFFFFF"}}>
            {Strings.NEW_MESSAGE}
        </Text>,
    headerRight:
        <TouchableOpacity style={{paddingLeft: 16, paddingRight: 16}}
                          onPress={() => navigation.getParam("saveThread")()}>
            <Icon style={globalStyles.headerIconStyle} name="ios-add" color='#FFFFFF' size={30}/>
        </TouchableOpacity>,
});

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#FFFFFF',
        paddingLeft: 16,
        paddingRight: 16,
    },
    itemInputStyle: {
        backgroundColor: '#9B9B9B29',
        borderRadius: 12,
        borderWidth: 0,
        minHeight: 40,
        borderColor: 'transparent',
    },
    inputStyle: {
        fontSize: 15,
        color: '#000000A3',
        padding: 6,
        flex: 1,
    },
    promptStyle: {
        alignSelf: 'flex-start',
        fontSize: 12,
        marginTop: 10,
        padding: 4,
        color: '#000000A3'
    },
    autocompleteInputContainerStyle: {
        borderWidth: 0,
    },
    selectedContainerStyle: {
        paddingLeft: 6,
        paddingRight: 6,
        marginRight: 4,
        marginLeft: 4,
        backgroundColor: '#0084FD',
        borderRadius: 16,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedParticipantsScrollStyle: {
        paddingLeft: 4,
        paddingRight: 4,
    },
    settingContainerStyle: {
        flexDirection: 'row',
        marginBottom: 4
    },
    removeParticipantButtonStyle: {
        paddingLeft: 6,
        paddingRight: 6,
        paddingBottom: 4,
        paddingTop: 4,
    }
});

const mapStateToProps = state => ({
    participantsQuery: state.communication.participantsQuery,
    selectedParticipants: state.communication.selectedParticipants,
    subject: state.communication.subject,
    messageBody: state.communication.messageBody,
    newMessageThread: state.communication.newMessageThread,
    messageThreads: state.communication.messageThreads,
});

export default connect(mapStateToProps, {
    findParticipants,
    selectParticipant,
    clearCreateMessageThread,
    sendMessageThread,
    setShouldUpdateThreads,
    subjectChange,
    messageBodyChange,
    toggleHideParticipants,
    toggleForbidResponses,
    resetNewMessageThread,
    deleteSelectedParticipant,
})(NewThreadScreen);