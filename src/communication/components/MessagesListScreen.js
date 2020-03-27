import React, {Component} from "react";
import {ActivityIndicator, Alert, Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {Bubble, CustomActions, GiftedChat, Send, Message, InputToolbar, Composer} from "react-native-gifted-chat";
import {navigateThreadDetails, sendMessage,navigateStudentProfile, showErrorMessage, downloadFile} from "../../actions/index";
import {globalStyles} from "../../utils/Styles";
import {globalColors} from "../../utils/Colors";
import {Text} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Strings from "../../utils/Strings";
import * as MockDataUtils from "../../utils/MockDataUtils";

class MessageListScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigation.getParam("offer").description;
        props.navigation.setParams({
            headerTitleString: this.props.navigation.getParam("offer") ?
                this.props.navigation.getParam("offer").description :
                Strings.MESSAGES,
            navigateThreadDetails: navigateThreadDetails,
        });
    }

    renderSend(props) {
        return (
            <Send alwaysShowSend={true} {...props}>
                <View containerStyle={{alignItems: 'center'}}>
                    <MaterialIcons size={30} color="#0084FD" name="send"/>
                </View>
            </Send>
        );
    }

    render() {
        let messagesList = [];
        if(this.props.navigation.getParam("threadId")){
            messagesList = this.props.messageThreads.find(
                (r) => r && r.id == this.props.navigation.getParam("threadId")).messages;
        } else if(this.props.navigation.getParam("offer") && this.props.navigation.getParam("offer").offerId){
            messagesList = MockDataUtils.getMessages();
        }
        console.log(this.props.navigation.getParam("offer"));
        return (
            <View style={styles.chatContainerStyle}>
                <GiftedChat
                    renderLoading={() => <View style={globalStyles.spinnerContainerStyle}>
                        <ActivityIndicator size='large' color={globalColors.titleColor} animating={true}/></View>}
                    messages={messagesList}
                    onSend={this.onSend.bind(this)}
                    onPressAvatar={this.onAvatarClicked}
                    user={{_id: 1}}
                    renderSend={this.renderSend.bind(this)}
                    placeholder="Въведете съобщение"
                    renderBubble={this.renderBubble.bind(this)}
                    renderChatFooter={this.renderChatFooter.bind(this)}
                    renderInputToolbar={this.renderInputToolbar.bind(this)}
                    renderComposer={this.renderComposer.bind(this)}
                    renderCustomView={this.renderCustomView.bind(this)}
                    minComposerHeight={42.5}
                    isCustomViewBottom={false}
                />
            </View>
        );
    }

    onSend(messages = []) {
        if (messages && messages.length > 0) {
            messages[0].id = messages[0]._id;
            messages[0].body = messages[0].text;
            this.props.sendMessage(messages[0].text, this.props.currentUserId, this.props.navigation.state.params.threadId)
        }
    }

    renderBubble(props) {
        let renderName = props.currentMessage.user_id != this.props.currentUserId &&
            props.previousMessage.user_id != props.currentMessage.user_id;
        return (<View>
                {
                    renderName ? <Text style={{
                        marginLeft: 8,
                        marginBottom: 2,
                        fontSize: 11,
                        color: '#000000DE',
                        alignSelf: 'flex-start'
                    }}>
                        {props.currentMessage.user.name}
                    </Text> : null
                }
                <Bubble
                    {...props}
                    wrapperStyle={{
                        left: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            backgroundColor: '#F0F0F0',
                        },
                        right: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingLeft: 8,
                            paddingRight: 8,
                            backgroundColor: '#0084FD',
                        }
                    }}
                >
                </Bubble>
            </View>
        );
    }

    renderChatFooter(props) {
        return (<View style={{height: 16}}/>);
    }

    renderInputToolbar(props) {
        return (
            <InputToolbar
                containerStyle={{paddingLeft: 5, paddingRight: 8, paddingBottom: 8, borderTopWidth: 0}} {...props}/>
        );
    }

    renderComposer(props) {
        return (
            <Composer textInputStyle={{
                borderRadius: 28,
                paddingTop: 14,
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16,
                backgroundColor: '#F2F3F5',
                justifyContent: "center",
            }} {...props}/>
        );
    }

    renderCustomView(props) {
        if (props.currentMessage.files && props.currentMessage.files.length > 0) {
            let filesView = [];
            for (let fileIndex in props.currentMessage.files) {
                let fileData = props.currentMessage.files[fileIndex];
                filesView.push(
                    <View key={fileIndex}>
                        <TouchableOpacity style={{padding: 16, flexDirection: 'row'}}
                                          onPress={() => this.props.downloadFile(fileData.system_name, fileData.original_name, fileData.mimetype)}>
                            <Icon name='ios-download'
                                  size={20}
                                  color={props.currentMessage.user_id == this.props.currentUserId ? '#fff' : '#1186C9'}
                                  style={{paddingRight: 16}}/>
                            <Text style={{
                                textDecorationLine: 'underline',
                                color: props.currentMessage.user_id == this.props.currentUserId ? '#fff' : '#1186C9'
                            }}>{fileData.original_name}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }

            return (
                <View style={{flexDirection: 'column'}}>
                    {filesView}
                </View>);
        } else {
            return (<View/>);
        }
    }


    onAvatarClicked(user) {
        navigateStudentProfile(user);
    }

}

MessageListScreen.navigationOptions = ({navigation}) => ({
    tabBarVisible: false,
    headerTitleContainerStyle: globalStyles.headerTitleContainerStyle,
    headerStyle: globalStyles.headerStyle,
    headerTintColor: globalColors.headerTintColor,
    headerTitle:
        <Text numberOfLines={1}
              style={globalStyles.headerTitleStyle}>
            {navigation.state.params.headerTitleString}
        </Text>,
    headerRight: <TouchableOpacity
        onPress={() => navigation.state.params.navigateThreadDetails(navigation.state.params.threadId, navigation.state.params.subject)}
        style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 1,
            paddingLeft: 16,
            paddingRight: 16
        }}>
        <Icon name="ios-information-circle" color='#FFFFFF'
              size={35}/>
    </TouchableOpacity>
});

const styles = StyleSheet.create({
    chatContainerStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
});

const mapStateToProps = state => ({
    messages: state.communication.messages,
    currentUserId: state.communication.currentUserId,
    messageThreads: state.communication.messageThreads,
    messageThreadInfo: state.communication.messageThreadInfo,
});

export default connect(mapStateToProps, {sendMessage, showErrorMessage, downloadFile})(MessageListScreen);