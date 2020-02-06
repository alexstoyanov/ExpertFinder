import React from 'react';
import {
    GET_OFFERS_FOR_PROFESSOR,
    GET_OFFERS_FOR_PROFESSOR_SUCCESS,
    GET_OFFERS_FOR_PROFESSOR_FAIL, DESCRIPTION_CHANGED, POST_OFFER, POST_OFFER_SUCCESS, POST_OFFER_FAIL,
    GET_ALL_STUDENTS, GET_ALL_STUDENTS_SUCCESS, GET_ALL_STUDENTS_FAIL, ASSIGN_STUDENT_OFFER,
    ASSIGN_STUDENT_OFFER_SUCCESS, ASSIGN_STUDENT_OFFER_FAIL, SELECT_OFFER, GET_OFFERS_FOR_STUDENT,
    GET_OFFERS_FOR_STUDENT_SUCCESS, GET_OFFERS_FOR_STUDENT_FAIL
} from "../../actions/actionTypes";
import * as Constants from "../../utils/Constants";
import {asyncGetRequest, asyncPutRequestUnauthorized, asyncRequestJSONBody} from "../../utils/WebServiceUtils";
import * as MockDataUtils from "../../utils/MockDataUtils";

export const getOffers = (professorId) => {
    return (dispatch) => {
        dispatch({
            type: GET_OFFERS_FOR_PROFESSOR,
            payload: null
        });
        getOffersAsync(dispatch, professorId);
    }
};

async function getOffersAsync(dispatch, professorId) {
    asyncGetRequest(dispatch,
        Constants.API_URL + '/offer/v1/merchants/' + encodeURIComponent(professorId),
        getOffersSuccess, getOffersFail, {'offer-status' : 'ACTIVE'});
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

export const getStudents = () => {
    return (dispatch) => {
        dispatch({
            type: GET_ALL_STUDENTS,
            payload: null
        });
        getStudentsAsync(dispatch, );
    }
};

async function getStudentsAsync(dispatch) {
    asyncGetRequest(dispatch,
        Constants.API_URL + '/student/v1', getStudentsSuccess, getStudentsFail);
}

const getStudentsSuccess = (dispatch, students) => {
    dispatch({
        type: GET_ALL_STUDENTS_SUCCESS,
        payload: students
    });
};

const getStudentsFail = (dispatch, message) => {
    dispatch({
        type: GET_ALL_STUDENTS_FAIL,
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
