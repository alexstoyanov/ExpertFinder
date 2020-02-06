import {
    GET_CHANNELS,
    GET_CHANNELS_SUCCESS,
    GET_CHANNELS_FAIL, GET_OFFERS_FOR_PROFESSOR, GET_OFFERS_FOR_PROFESSOR_SUCCESS, GET_OFFERS_FOR_PROFESSOR_FAIL,
    DESCRIPTION_CHANGED, GET_ALL_STUDENTS, GET_ALL_STUDENTS_SUCCESS, GET_ALL_STUDENTS_FAIL, ASSIGN_STUDENT_OFFER_FAIL,
    ASSIGN_STUDENT_OFFER_SUCCESS, ASSIGN_STUDENT_OFFER, POST_OFFER_SUCCESS, SELECT_OFFER
} from "../../actions/actionTypes";
import * as Strings from "../../utils/Strings";
import update from 'immutability-helper';

const INITIAL_STATE = {
    offers: [],
    description: "",
    students: [],
    selectedOfferId: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_OFFERS_FOR_PROFESSOR:
            return {
                ...state,
                offers: [],
            };
        case GET_OFFERS_FOR_PROFESSOR_SUCCESS:
            return {
                ...state,
                offers: action.payload,
            };
        case GET_OFFERS_FOR_PROFESSOR_FAIL:
            return {
                ...state,
                offers: [],
            };
        case GET_ALL_STUDENTS:
            return {
                ...state,
                students: [],
            };
        case GET_ALL_STUDENTS_SUCCESS:
            return {
                ...state,
                students: action.payload,
            };
        case GET_ALL_STUDENTS_FAIL:
            return {
                ...state,
                students: [],
            };
        case ASSIGN_STUDENT_OFFER_SUCCESS:
            let offerIndex = state.offers.findIndex(x => x.offerId == action.payload.offerId);
            return update(state, {
                offers: {
                    [offerIndex]: {$set: action.payload}
                }
            });
        case POST_OFFER_SUCCESS:
            return update(state, {
                offers: {
                    $push: [action.payload]
                }
            });
        case SELECT_OFFER:
            return {
                ...state,
                selectedOfferId: action.payload,
            };
        case DESCRIPTION_CHANGED:
            return {...state, description: action.payload};
        default:
            return state;
    }
};