import {
    GET_CHANNELS,
    GET_CHANNELS_SUCCESS,
    GET_CHANNELS_FAIL, SELECT_TIMELINE_ITEM, ITEM_DESCRIPTION_CHANGED, ITEM_TITLE_CHANGED, POST_RSS_ITEM,
    SET_RSS_CHANNELS
} from "../../actions/actionTypes";
import * as Strings from "../../utils/Strings";
import update from 'immutability-helper';

const INITIAL_STATE = {
    channels: [],
    selectedTimelineItemId: {},
    itemDescription: "",
    itemTitle: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CHANNELS:
            return {...state,
                channels: [],
            };
        case GET_CHANNELS_SUCCESS:
            console.log(action);
            return {...state,
                channels: action.payload,
            };
        case GET_CHANNELS_FAIL:
            return {...state,
                channels: [],
            };
        case SELECT_TIMELINE_ITEM:
            return{
                ...state,
                selectedTimelineItemId: action.payload
            };
        case ITEM_DESCRIPTION_CHANGED:
            return {...state, itemDescription: action.payload};
        case ITEM_TITLE_CHANGED:
            return {...state, itemTitle: action.payload};
        case POST_RSS_ITEM:
            return{
                ...state,
                channels: action.payload
            };
        case SET_RSS_CHANNELS:
            return {
                ...state,
                channels: action.payload
            };
        default:
            return state;
    }
};