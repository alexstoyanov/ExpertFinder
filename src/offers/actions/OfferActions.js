import React from 'react';
import {
    ASSIGN_STUDENT_OFFER,
    ASSIGN_STUDENT_OFFER_FAIL,
    ASSIGN_STUDENT_OFFER_SUCCESS,
    DESCRIPTION_CHANGED,
    GET_OFFERS_FOR_PROFESSOR,
    GET_OFFERS_FOR_PROFESSOR_FAIL,
    GET_OFFERS_FOR_PROFESSOR_SUCCESS,
    GET_OFFERS_FOR_STUDENT,
    GET_OFFERS_FOR_STUDENT_FAIL,
    GET_OFFERS_FOR_STUDENT_SUCCESS,
    POST_OFFER,
    POST_OFFER_FAIL,
    POST_OFFER_SUCCESS,
    SELECT_OFFER,
    SELECT_OFFER_SPECIALTY,
    SELECT_OFFER_STATUS,
    SELECT_STUDENT_FILTER,
    TOGGLE_OFFER_STATUS_VISIBILITY,
    TOGGLE_SPECIALITY_VISIBILITY,
    TOGGLE_STUDENTS_MODAL_VISIBILITY
} from "../../actions/actionTypes";
import * as Constants from "../../utils/Constants";
import {asyncGetRequest, asyncPutRequestUnauthorized, asyncRequestJSONBody} from "../../utils/WebServiceUtils";

export const getOffers = (professorId, offerStatus) => {
    return (dispatch) => {
        dispatch({
            type: GET_OFFERS_FOR_PROFESSOR,
            payload: null
        });
        getOffersAsync(dispatch, professorId, offerStatus);
    }
};

async function getOffersAsync(dispatch, professorId, offerStatus) {
    asyncGetRequest(dispatch,
        Constants.API_URL + '/offer/v1/merchants/' + encodeURIComponent(professorId),
        getOffersSuccess, getOffersFail, {'offer-status' : offerStatus});
}

const getOffersSuccess = (dispatch, offers) => {
    dispatch({
        type: GET_OFFERS_FOR_PROFESSOR_SUCCESS,
        payload: offers
    });
};

const getOffersFail = (dispatch, message) => {
    dispatch({
        type: GET_OFFERS_FOR_PROFESSOR_FAIL,
        payload: message
    });
};

export const descriptionChange = (text) => {
    return {
        type: DESCRIPTION_CHANGED,
        payload: text
    }
};

export const postOffer = (description, professorId) => {
    return (dispatch) => {
        dispatch({
            type: POST_OFFER,
            payload: null
        });

        postOfferAsync(dispatch, description, professorId);
    };
};

async function postOfferAsync(dispatch, desc, professorId) {
    let requestBody = {
        description : desc,
        currency : "string",
        price: 0,
        productItemRequests: [{
            productDescription: "string",
            productType : "string"
        }
        ]
    };

    asyncRequestJSONBody(dispatch,
        Constants.API_URL + '/offer/v1/merchants/' + encodeURIComponent(professorId), requestBody,
        postOfferSuccess, postOfferFail);
}

async function postOfferSuccess(dispatch, response) {
    console.log(response);
    dispatch({
        type: POST_OFFER_SUCCESS,
        payload: response
    });
}

const postOfferFail = (dispatch, message) => {
    dispatch({
        type: POST_OFFER_FAIL,
        payload: message
    });
};

export const assignStudentOffer = (offerId, professorId, studentId) => {
    console.log(offerId);
    console.log(professorId);
    console.log(studentId);
    return (dispatch) => {
        dispatch({
            type: ASSIGN_STUDENT_OFFER,
            payload: null
        });
        assignStudentOfferAsync(dispatch, offerId, professorId, studentId);
    }
};

async function assignStudentOfferAsync(dispatch, offerId, professorId, studentId) {
    asyncPutRequestUnauthorized(dispatch,
        Constants.API_URL + '/offer/v1/merchants/' + encodeURIComponent(professorId)
        + '/students/' + encodeURIComponent(studentId)
        + '/offers/' + encodeURIComponent(offerId),
        assignStudentOfferSuccess, assignStudentOfferFail);
}

const assignStudentOfferSuccess = (dispatch, response) => {
    dispatch({
        type: ASSIGN_STUDENT_OFFER_SUCCESS,
        payload: response
    });
};

const assignStudentOfferFail = (dispatch, message) => {
    dispatch({
        type: ASSIGN_STUDENT_OFFER_FAIL,
        payload: message
    });
};

export const selectOffer = (offerId) => {
    return {
        type: SELECT_OFFER,
        payload: offerId
    }
};

export const getOffersForStudent = (studentId) => {
    return (dispatch) => {
        dispatch({
            type: GET_OFFERS_FOR_STUDENT,
            payload: null
        });
        getOffersForStudentAsync(dispatch, studentId);
    }
};

async function getOffersForStudentAsync(dispatch, studentId) {
    asyncGetRequest(dispatch,
        Constants.API_URL + '/offer/v1/students/' + encodeURIComponent(studentId),
        getOffersForStudentSuccess, getOffersForStudentFail, {'offer-status' : 'ACTIVE'});
}

const getOffersForStudentSuccess = (dispatch, offers) => {
    dispatch({
        type: GET_OFFERS_FOR_STUDENT_SUCCESS,
        payload: offers
    });
};

const getOffersForStudentFail = (dispatch, message) => {
    dispatch({
        type: GET_OFFERS_FOR_STUDENT_FAIL,
        payload: message
    });
};

export const toggleOfferStatusVisibility = (visibility) => {
    return {
        type: TOGGLE_OFFER_STATUS_VISIBILITY,
        visibility: visibility,
    }
};

export const toggleSpecialityVisibility = (visibility) => {
    return {
        type: TOGGLE_SPECIALITY_VISIBILITY,
        visibility: visibility,
    }
};

export const selectOfferStatusFilter = (offerStatusFilter) => {
    return {
        type: SELECT_OFFER_STATUS,
        offerStatusFilter: offerStatusFilter,
    }
};

export const selectSpecialtyFilter = (specialtyFilter) => {
    return {
        type: SELECT_OFFER_SPECIALTY,
        specialtyFilter: specialtyFilter,
    }
};

export const selectStudentFilter = (studentFilter) => {
    return {
        type: SELECT_STUDENT_FILTER,
        studentFilter: studentFilter,
    }
};

export const toggleStudentsModalVisibility = (visibility) => {
    return {
        type: TOGGLE_STUDENTS_MODAL_VISIBILITY,
        visibility: visibility,
    }
};


