import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import ThreadsListScreen from "../components/ThreadsListScreen";
import NewThreadScreen from "../components/NewThreadScreen";
import ChooseParticipantsScreen from "../components/ChooseParticipantsScreen";
import MessagesListScreen from "../components/MessagesListScreen";
import MessageThreadDetailsScreen from "../components/MessageThreadDetailsScreen";

export const CommunicationStackNavigator = createStackNavigator ({
    CommunicationHome:{
        screen: ThreadsListScreen,
        navigationOptions: {
            headerBackTitle: null
        }
    },
    ChooseParticipants:{
        screen: ChooseParticipantsScreen,
        navigationOptions: {
            headerBackTitle: null
        }
    },
    CreateMessageThread: {
        screen: NewThreadScreen,
        navigationOptions: {
            headerBackTitle: null
        }

    },
    Messages: {
        screen: MessagesListScreen,
        navigationOptions: {
            headerBackTitle: null
        }
    },
    ThreadDetails: {
        screen: MessageThreadDetailsScreen,
        navigationOptions: {
            headerBackTitle: null
        }
    },
}, {
    headerMode: 'float',
});


CommunicationStackNavigator.navigationOptions = ({navigation}) => ({
    header:null,
});

export default CommunicationStackNavigator;