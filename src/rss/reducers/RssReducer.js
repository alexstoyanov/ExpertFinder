import {
    GET_CHANNELS,
    GET_CHANNELS_SUCCESS,
    GET_CHANNELS_FAIL, SELECT_TIMELINE_ITEM
} from "../../actions/actionTypes";
import * as Strings from "../../utils/Strings";

const INITIAL_STATE = {
    channels: [],
    selectedTimelineItemId: {},
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
        default:
            return state;
    }
};