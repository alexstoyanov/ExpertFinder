import React from 'react';
import {
    GET_CHANNELS,
    GET_CHANNELS_SUCCESS,
    GET_CHANNELS_FAIL, SELECT_OFFER, SELECT_TIMELINE_ITEM
} from "../../actions/actionTypes";
import * as Constants from "../../utils/Constants";
import {asyncPostRequestUnauthorized} from "../../utils/WebServiceUtils";
import * as MockDataUtils from "../../utils/MockDataUtils";


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
    let data = MockDataUtils.getChannels();
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