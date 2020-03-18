import React from 'react';
import {
    GET_CHANNELS,
    GET_CHANNELS_FAIL,
    GET_CHANNELS_SUCCESS,
    ITEM_DESCRIPTION_CHANGED,
    ITEM_TITLE_CHANGED,
    POST_RSS_ITEM,
    POST_RSS_ITEM_FAIL,
    POST_RSS_ITEM_SUCCESS,
    SELECT_TIMELINE_ITEM, SET_RSS_CHANNELS
} from "../../actions/actionTypes";
import {asyncRequestJsonBody, dispatchEvent} from "../../utils/WebServiceUtils";
import * as MockDataUtils from "../../utils/MockDataUtils";
import AsyncStorage from '@react-native-community/async-storage';

export const getChannels = () => {
    return (dispatch) => {
        dispatch({
            type: GET_CHANNELS,
            payload: null
        });
        getChannelsAsync(dispatch);
    }
};

async function getChannelsAsync(dispatch) {
    getChannelsSuccess(dispatch, data);
}

const getChannelsSuccess = (dispatch, channels) => {
    dispatch({
        type: GET_CHANNELS_SUCCESS,
        payload: channels
    });
};

const getChannelsFail = (dispatch, message) => {
    dispatch({
        type: GET_CHANNELS_FAIL,
        payload: message
    });
};

export const selectTimelineItem = (timelineItemId) => {
    return {
        type: SELECT_TIMELINE_ITEM,
        payload: timelineItemId
    }
};

export const itemDescriptionChange = (text) => {
    return {
        type: ITEM_DESCRIPTION_CHANGED,
        payload: text
    }
};

export const itemTitleChange = (text) => {
    return {
        type: ITEM_TITLE_CHANGED,
        payload: text
    }
};

export const postRssItem = (newChannels) => {
    console.log(newChannels);
    postRssItemAsync(dispatchEvent, newChannels);
    return (dispatch) => {
        dispatchEvent(dispatch, POST_RSS_ITEM, newChannels);
    }
};

async function postRssItemAsync(dispatch, newChannels) {
    console.log(newChannels);
    await AsyncStorage.setItem('rssChannels', JSON.stringify(newChannels));
}

const postRssItemSuccess = (dispatch, response) => {
    dispatchEvent(dispatch, POST_RSS_ITEM_SUCCESS, response, Strings.SUCCESSFUL_SEND_THREAD);
};

const postRssItemFail = (dispatch, message) => {
    dispatchEvent(dispatch, POST_RSS_ITEM_FAIL, message, null, Strings.ERROR_SEND_THREAD);
};

export const setRssChannels = (rssChannels) => {
    return {
        type: SET_RSS_CHANNELS,
        payload: rssChannels
    }
};

