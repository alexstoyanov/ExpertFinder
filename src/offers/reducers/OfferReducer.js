import {
    GET_CHANNELS,
    GET_CHANNELS_SUCCESS,
    GET_CHANNELS_FAIL, GET_OFFERS_FOR_PROFESSOR, GET_OFFERS_FOR_PROFESSOR_SUCCESS, GET_OFFERS_FOR_PROFESSOR_FAIL,
    DESCRIPTION_CHANGED, GET_ALL_STUDENTS, GET_ALL_STUDENTS_SUCCESS, GET_ALL_STUDENTS_FAIL, ASSIGN_STUDENT_OFFER_FAIL,
    ASSIGN_STUDENT_OFFER_SUCCESS, ASSIGN_STUDENT_OFFER, POST_OFFER_SUCCESS, SELECT_OFFER,
    TOGGLE_OFFER_STATUS_VISIBILITY, SELECT_OFFER_STATUS, TOGGLE_SPECIALITY_VISIBILITY, SELECT_OFFER_SPECIALTY,
    SELECT_STUDENT_FILTER, TOGGLE_STUDENTS_MODAL_VISIBILITY
} from "../../actions/actionTypes";
import * as Strings from "../../utils/Strings";
import update from 'immutability-helper';
import * as Constants from "../../utils/Constants";
import {selectOfferStatusFilter} from "../actions/OfferActions";

const INITIAL_STATE = {
    offers: [],
    filteredOffers: [],
    offersSpecialities: [],
    offersStudents: [],
    description: "",
    students: [],
    selectedOfferId: {},
    offerStatusModalVisible: false,
    specialityModalVisible: false,
    studentModalVisible: false,
    offerStatusFilter: Constants.ACTIVE,
    specialtyFilter: "",
    studentFilter: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_OFFERS_FOR_PROFESSOR:
            return {
                ...state,
                offers: [],
                filteredOffers: [],
            };
        case GET_OFFERS_FOR_PROFESSOR_SUCCESS:
            let studentOffersSpecialities = action.payload.filter(offer =>
                offer.studentResponse && offer.studentResponse.specialty != null
            ).map(function (offer) {
                return offer.studentResponse.specialty;
            });
            studentOffersSpecialities = Array.from(new Set(studentOffersSpecialities));
            let studentsOffers = action.payload.filter(offer =>
                offer.studentResponse && offer.studentResponse.firstName != null
            ).map(function (offer) {
                return offer.studentResponse.firstName + " " + offer.studentResponse.lastName;
            });
            studentsOffers = Array.from(new Set(studentsOffers));
            //Filter offers
            let filteredOffers = action.payload;
            if(state.specialtyFilter != ""){
                filteredOffers = action.payload.filter(offer =>
                    offer.studentResponse && offer.studentResponse.specialty == state.specialtyFilter);
            }
            if(state.studentFilter != ""){
                filteredOffers = action.payload.filter(offer =>
                    offer.studentResponse
                    && offer.studentResponse.firstName + " " + offer.studentResponse.lastName == state.studentFilter);
            }
            return {
                ...state,
                offers: action.payload,
                filteredOffers: filteredOffers,
                offersSpecialities: studentOffersSpecialities,
                offersStudents: studentsOffers,
            };
        case GET_OFFERS_FOR_PROFESSOR_FAIL:
            return {
                ...state,
                offers: [],
                filteredOffers: [],
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
                },
                filteredOffers: {
                    [offerIndex]: {$set: action.payload}
                },
            });
        case POST_OFFER_SUCCESS:
            return update(state, {
                offers: {
                    $push: [action.payload]
                },
                filteredOffers: {
                    $push: [action.payload]
                },
            });
        case SELECT_OFFER:
            return {
                ...state,
                selectedOfferId: action.payload,
            };
        case DESCRIPTION_CHANGED:
            return {...state, description: action.payload};
        case TOGGLE_OFFER_STATUS_VISIBILITY:
            return {
                ...state,
                offerStatusModalVisible: action.visibility
            };
        case TOGGLE_SPECIALITY_VISIBILITY:
            return {
                ...state,
                specialityModalVisible: action.visibility
            };
        case SELECT_OFFER_STATUS:
            return {
                ...state,
                offerStatusFilter: action.offerStatusFilter
            };
        case SELECT_OFFER_SPECIALTY:
            let filteredByOfferSpecialty = state.offers.filter(offer =>
                offer.studentResponse &&
                ((action.specialtyFilter == "" || offer.studentResponse.specialty == action.specialtyFilter)
                && ((state.studentFilter != ""
                    && offer.studentResponse.firstName + " " + offer.studentResponse.lastName == state.studentFilter)
                || state.studentFilter == ""))
            );
            return {
                ...state,
                specialtyFilter: action.specialtyFilter,
                filteredOffers: filteredByOfferSpecialty,
            };
        case SELECT_STUDENT_FILTER:
            let filteredByStudent = state.offers.filter(offer =>
                offer.studentResponse &&
                ((action.studentFilter == "" || offer.studentResponse.firstName + " " + offer.studentResponse.lastName == action.studentFilter)
                && ((state.specialtyFilter != "" && offer.studentResponse.specialty == state.specialtyFilter)
                || state.specialtyFilter == ""))
            );
            return {
                ...state,
                studentFilter: action.studentFilter,
                filteredOffers: filteredByStudent
            };
        case TOGGLE_STUDENTS_MODAL_VISIBILITY:
            return {
                ...state,
                studentModalVisible: action.visibility
            };
        default:
            return state;
    }
};