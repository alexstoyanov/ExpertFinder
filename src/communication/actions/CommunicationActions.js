import React from 'react';
import {
    CLEAR_CREATE_MESSAGE_THREAD,
    DELETE_SELECTED_PARTICIPANT,
    FIND_PARTICIPANTS,
    GET_MESSAGES,
    GET_MESSAGES_FAIL,
    GET_MESSAGES_SUCCESS,
    GET_PARTICIPANTS,
    GET_PARTICIPANTS_FAIL,
    GET_PARTICIPANTS_SUCCESS,
    GET_THREADS,
    GET_THREADS_FAIL,
    GET_THREADS_SUCCESS,
    MESSAGE_BODY_CHANGED, QUERY_THREADS, RESET_NEW_MESSAGE_THREAD,
    SELECT_PARTICIPANT,
    SEND_MESSAGE,
    SEND_MESSAGE_FAIL,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_THREAD,
    SEND_MESSAGE_THREAD_FAIL,
    SEND_MESSAGE_THREAD_READ,
    SEND_MESSAGE_THREAD_READ_FAIL,
    SEND_MESSAGE_THREAD_READ_SUCCESS,
    SEND_MESSAGE_THREAD_SUCCESS, SET_MESSAGE_THREADS,
    SET_SELECTED_MESSAGE,
    SET_SELECTED_MESSAGE_THREAD,
    SET_SHOULD_UPDATE_THREADS,
    SUBJECT_CHANGED, TOGGLE_FORBID_RESPONSE, TOGGLE_FORBID_RESPONSE_FAIL, TOGGLE_FORBID_RESPONSE_SUCCESS,
    TOGGLE_HIDE_PARTICIPANTS, TOGGLE_HIDE_PARTICIPANTS_FAIL, TOGGLE_HIDE_PARTICIPANTS_SUCCESS,
    TOGGLE_MUTE_NOTIFICATIONS,
    TOGGLE_MUTE_NOTIFICATIONS_FAIL,
    TOGGLE_MUTE_NOTIFICATIONS_SUCCESS,
} from "../../actions/actionTypes";
import * as Constants from "../../utils/Constants";
import {
    asyncGetRequest,
    asyncRequestJSONBody,
    asyncRequestJsonBody,
    dispatchEvent
} from "../../utils/WebServiceUtils";
import * as Strings from "../../utils/Strings";
import AsyncStorage from '@react-native-community/async-storage';


export const getThreads = (pageNum = 1) => {
    return (dispatch) => {
        getThreadsAsync(dispatch, pageNum);
    }
};

async function getThreadsAsync(dispatch, pageNum) {
    let actionPayload = {};
    actionPayload.currentUserId = 2;
    actionPayload.resetThreads = pageNum == 1;
    actionPayload.threads = JSON.parse(threads);
    dispatchEvent(dispatch, GET_THREADS, actionPayload);
}

const getThreadsSuccess = (dispatch, messageThreads) => {
    dispatchEvent(dispatch, GET_THREADS_SUCCESS, messageThreads);
};

const getThreadsFail = (dispatch, message) => {
    dispatchEvent(dispatch, GET_THREADS_FAIL, message);
};

export const getMessages = (offerId) => {
    return (dispatch) => {
        dispatchEvent(dispatch, GET_MESSAGES, offerId);
        getMessagesAsync(dispatch, offerId);
    }
};

async function getMessagesAsync(dispatch, offerId) {
    asyncGetRequest(dispatch, Constants.SHKOLO_API_URL + '/offer/v1/offers/' + encodeURIComponent(offerId) + '/comment',
        getMessagesSuccess, getMessagesFail);
}

const getMessagesSuccess = (dispatch, payload) => {
    dispatchEvent(dispatch, GET_MESSAGES_SUCCESS, payload);
};

const getMessagesFail = (dispatch, message) => {
    dispatchEvent(dispatch, GET_MESSAGES_FAIL, message);
};

export const getParticipants = (threadId) => {
    return (dispatch) => {
        dispatchEvent(dispatch, GET_PARTICIPANTS, null);
        getParticipantsAsync(dispatch, threadId);
    }
};

async function getParticipantsAsync(dispatch, threadId) {
    asyncGetRequest(dispatch, Constants.SHKOLO_API_URL + '/v1/messenger/threads/' + encodeURIComponent(threadId) + '/participants',
        getParticipantsSuccess, getParticipantsFail);
}

const getParticipantsSuccess = (dispatch, payload) => {
    dispatchEvent(dispatch, GET_PARTICIPANTS_SUCCESS, payload);
};

const getParticipantsFail = (dispatch, message) => {
    dispatchEvent(dispatch, GET_PARTICIPANTS_FAIL, message);
};

export const sendMessage = (text, currentUserId, threadId) => {
    return (dispatch) => {
        dispatchEvent(dispatch, SEND_MESSAGE, null);
        postMessageAsync(dispatch, text, currentUserId, threadId);
    }
};

async function postMessageAsync(dispatch, text, currentUserId, threadId) {
    let requestBody = {};
    requestBody.body = text;

    asyncRequestJSONBody(dispatch,
        Constants.SHKOLO_API_URL + '/v1/messenger/threads/' + encodeURIComponent(threadId) + "/messages",
        requestBody,
        postMessageSuccess, postMessageFail);
}

const postMessageSuccess = (dispatch, response) => {
    dispatchEvent(dispatch, SEND_MESSAGE_SUCCESS, response);
};

const postMessageFail = (dispatch, message) => {
    dispatchEvent(dispatch, SEND_MESSAGE_FAIL, message);
};

export const findParticipants = (participantsQuery) => {
    return {
        type: FIND_PARTICIPANTS,
        payload: participantsQuery

    }
};

export const selectParticipant = (participant) => {
    return {
        type: SELECT_PARTICIPANT,
        payload: participant
    }
};

export const clearCreateMessageThread = (participant) => {
    return {
        type: CLEAR_CREATE_MESSAGE_THREAD,
        payload: participant

    }
};

export const deleteSelectedParticipant = (selectedParticipant) => {
    return {
        type: DELETE_SELECTED_PARTICIPANT,
        payload: selectedParticipant

    }
};

export const sendMessageThread = (messageThreads) => {
    postMessageThreadAsync(dispatchEvent, messageThreads);
    return (dispatch) => {
        dispatchEvent(dispatch, SEND_MESSAGE_THREAD, messageThreads);
    }
};

async function postMessageThreadAsync(dispatch, messageThreads) {
    await AsyncStorage.setItem('threads', JSON.stringify(messageThreads));
}

const postMessageThreadSuccess = (dispatch, response) => {
    dispatchEvent(dispatch, SEND_MESSAGE_THREAD_SUCCESS, response, Strings.SUCCESSFUL_SEND_THREAD);
};

const postMessageThreadFail = (dispatch, message) => {
    dispatchEvent(dispatch, SEND_MESSAGE_THREAD_FAIL, message, null, Strings.ERROR_SEND_THREAD);
};

export const subjectChange = (text) => {
    return {
        type: SUBJECT_CHANGED,
        payload: text
    }
};

export const messageBodyChange = (text) => {
    return {
        type: MESSAGE_BODY_CHANGED,
        payload: text
    }
};

export const sendMessageThreadRead = (payload) => {
    return (dispatch) => {
        dispatchEvent(dispatch, SEND_MESSAGE_THREAD_READ, payload);
        postMessageThreadReadAsync(dispatch, payload.threadId);
    }
};

async function postMessageThreadReadAsync(dispatch, threadId) {
    try {
        const value = await getToken();
        if (value !== null) {
            let requestBody = {};
            requestBody.token = value;
            requestBody.threadId = threadId;
            asyncRequestJsonBody(dispatch, Constants.SHKOLO_API_URL + '/v1/messages/refactoring/postThreadLastRead', requestBody,
                postMessageThreadReadSuccess, postMessageThreadReadFail);
        }
    } catch (err) {
    }
}

const postMessageThreadReadSuccess = (dispatch, response) => {
    dispatchEvent(dispatch, SEND_MESSAGE_THREAD_READ_SUCCESS, response.body);
};

const postMessageThreadReadFail = (dispatch, message) => {
    dispatchEvent(dispatch, SEND_MESSAGE_THREAD_READ_FAIL, message);
};

export const setShouldUpdateThreads = (shouldUpdateThreads) => {
    return {
        type: SET_SHOULD_UPDATE_THREADS,
        payload: shouldUpdateThreads
    }
};

export const toggleMuteNotifications = (mute, threadId) => {
    return (dispatch) => {
        dispatchEvent(dispatch, TOGGLE_MUTE_NOTIFICATIONS, mute);
        toggleMuteNotificationsAsync(dispatch, mute, threadId);
    }
};

async function toggleMuteNotificationsAsync(dispatch, mute, threadId) {
    let requestBody = {};
    requestBody.receive_notifications = !mute;

    asyncRequestJSONBody(dispatch,
        Constants.SHKOLO_API_URL + '/v1/messenger/threads/' + encodeURIComponent(threadId),
        requestBody,
        toggleMuteNotificationsSuccess, toggleMuteNotificationsFail);
}

const toggleMuteNotificationsSuccess = (dispatch, response) => {
    dispatchEvent(dispatch, TOGGLE_MUTE_NOTIFICATIONS_SUCCESS, response);
};

const toggleMuteNotificationsFail = (dispatch, message) => {
    dispatchEvent(dispatch, TOGGLE_MUTE_NOTIFICATIONS_FAIL, message);
};

export const queryThreads = (threadsQuery) => {
    return {
        type: QUERY_THREADS,
        payload: threadsQuery

    }
};

export const toggleForbidResponses = (forbid, threadId) => {
    return (dispatch) => {
        dispatchEvent(dispatch, TOGGLE_FORBID_RESPONSE, forbid);
        toggleForbidResponsesAsync(dispatch, forbid, threadId)
    }
};

async function toggleForbidResponsesAsync(dispatch, forbid, threadId) {
    let requestBody = {};
    requestBody.stop_answers = forbid;

    asyncRequestJSONBody(dispatch,
        Constants.SHKOLO_API_URL + '/v1/messenger/threads/' + encodeURIComponent(threadId),
        requestBody,
        toggleForbidResponsesSuccess, toggleForbidResponsesFail);
}

const toggleForbidResponsesSuccess = (dispatch, response) => {
    dispatchEvent(dispatch, TOGGLE_FORBID_RESPONSE_SUCCESS, response);
};

const toggleForbidResponsesFail = (dispatch, message) => {
    dispatchEvent(dispatch, TOGGLE_FORBID_RESPONSE_FAIL, message);
};

export const toggleHideParticipants = (hideParticipants, threadId) => {
    return (dispatch) => {
        dispatchEvent(dispatch, TOGGLE_HIDE_PARTICIPANTS, hideParticipants);
        toggleHideParticipantsAsync(dispatch, hideParticipants, threadId);
    }
};

async function toggleHideParticipantsAsync(dispatch, hideParticipants, threadId) {
    let requestBody = {};
    requestBody.hide_users = hideParticipants;

    asyncRequestJSONBody(dispatch,
        Constants.SHKOLO_API_URL + '/v1/messenger/threads/' + encodeURIComponent(threadId),
        requestBody,
        toggleHideParticipantsSuccess, toggleHideParticipantsFail);
}

const toggleHideParticipantsSuccess = (dispatch, response) => {
    dispatchEvent(dispatch, TOGGLE_HIDE_PARTICIPANTS_SUCCESS, response);
};

const toggleHideParticipantsFail = (dispatch, message) => {
    dispatchEvent(dispatch, TOGGLE_HIDE_PARTICIPANTS_FAIL, message);
};

export const resetNewMessageThread = () => {
    return (dispatch) => {
        dispatchEvent(dispatch, RESET_NEW_MESSAGE_THREAD);
    }
};

export const setMessageThreads = (messageThreads) => {
    return {
        type: SET_MESSAGE_THREADS,
        payload: messageThreads
    }
};
