import React, {Component} from "react";
import {ActivityIndicator, FlatList, StyleSheet, View, Text, Switch} from "react-native";
import {connect} from "react-redux";
import ListItem from "./ParticipantItem";
import {globalStyles} from "../../utils/Styles";
import {globalColors} from "../../utils/Colors";
import {Container, Content} from 'native-base';
import * as Strings from "../../utils/Strings";
import {
    toggleMuteNotifications,
    toggleForbidResponses,
    toggleHideParticipants,
    getParticipants
} from "../../actions/index";

class MessageThreadDetailsScreen extends Component {

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.renderLayout()}
            </View>
        );
    }

    keyExtractor = (item, index) => index.toString();

    renderLayout() {
        let threadInfo = this.props.messageThreads.find(
            (r) => r && r.id == this.props.navigation.getParam("threadId"));
        console.log(threadInfo);
        return (
            <View style={{flex: 1}}>
                <Text style={styles.titleStyle}>{Strings.SUBJECT}</Text>
                <Text style={styles.subjectStyle}>{this.props.messageThreadInfo.subject}</Text>
                <View style={styles.bigSeparatorStyle}/>
                <Text style={styles.titleStyle}>{Strings.PARTICIPANTS_IN_THREAD}</Text>
                {this.renderParticipants()}
            </View>
        );
    }

    renderParticipants(){
        if (this.props.loading){
            return <View style={globalStyles.spinnerContainerStyle}>
                <ActivityIndicator size='large' color={globalColors.titleColor} animating={true}/>
            </View>
        } else {
            if (this.checkIfParticipantsVisible(this.props.participants)){
                return <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.participants}
                    renderItem={({item}) => <ListItem
                        participant={item}/>}
                />
            } else {
                return <Text style={styles.infoTextStyle}>{Strings.HIDDEN_RECIPIENTS}</Text>
            }
        }
    }

    checkIfParticipantsVisible(participants) {
        return participants
            && (participants.length <= 2
                || this.props.currentUserId == this.props.messageThreadInfo.created_by
                || !this.props.messageThreadInfo.hid_users_at);
    }
}

MessageThreadDetailsScreen.navigationOptions = ({navigation}) => ({
    headerTitleStyle: globalStyles.headerTitleStyle,
    headerStyle: globalStyles.headerStyle,
    headerTitleContainerStyle: globalStyles.headerTitleContainerStyle,
    headerTintColor: globalColors.headerTintColor,
    headerTitle:
        <Text numberOfLines={1}
              style={[globalStyles.headerTitleStyle, {alignSelf: 'center', justifyContent: 'center'}]}>
            {navigation.state.params.subject}
        </Text>,
    headerRight:
        <View style={globalStyles.emptyHeaderButtonContainerStyle}/>
});

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
        flex: 1
    },
    titleStyle: {
        fontSize: 14,
        color: '#1186C9',
        margin: 16,
    },
    subjectStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 16,
    },
    infoTextStyle: {
        fontSize: 16,
        color: '#000000',
        marginLeft: 16,
        marginRight: 16,
    },
    settingContainerStyle: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    muteStyle: {
        color: '#0000008A',
        fontSize: 14,
    },
    bigSeparatorStyle: {
        height: 8,
        backgroundColor: '#E5E5E5'
    },
});

const mapStateToProps = state => ({
    currentUserId: state.communication.currentUserId,
    messageThreadInfo: state.communication.messageThreadInfo,
    participants: state.communication.participants,
    messageThreads: state.communication.messageThreads,
    loading: state.communication.loading,
});

export default connect(mapStateToProps, {
    toggleMuteNotifications,
    toggleForbidResponses,
    toggleHideParticipants,
    getParticipants
})(MessageThreadDetailsScreen);