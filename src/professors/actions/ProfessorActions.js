import React from 'react';
import {
    GET_ALL_PROFESSORS, GET_ALL_PROFESSORS_FAIL, GET_ALL_PROFESSORS_SUCCESS, POST_PROFESSOR, POST_PROFESSOR_FAIL,
    POST_PROFESSOR_SUCCESS, PROFESSOR_DEPARTMENT_CHANGE,
    PROFESSOR_FAMILY_NAME_CHANGE,
    PROFESSOR_FIRST_NAME_CHANGE
} from "../../actions/actionTypes";
import * as Constants from "../../utils/Constants";
import {asyncGetRequest, asyncRequestJSONBody} from "../../utils/WebServiceUtils";

export const getProfessors = () => {
    return (dispatch) => {
        dispatch({
            type: GET_ALL_PROFESSORS,
            payload: null
        });
        getProfessorsAsync(dispatch);
    }
};

async function getProfessorsAsync(dispatch) {
    asyncGetRequest(dispatch,
        Constants.API_URL + '/merchant/v1', getProfessorsSuccess, getProfessorsFail);
}

const getProfessorsSuccess = (dispatch, students) => {
    dispatch({
        type: GET_ALL_PROFESSORS_SUCCESS,
        payload: students
    });
};

const getProfessorsFail = (dispatch, message) => {
    dispatch({
        type: GET_ALL_PROFESSORS_FAIL,
        payload: message
    });
};

export const professorFirstNameChange = (text) => {
    return {
        type: PROFESSOR_FIRST_NAME_CHANGE,
        payload: text
    }
};

export const professorFamilyNameChange = (text) => {
    return {
        type: PROFESSOR_FAMILY_NAME_CHANGE,
        payload: text
    }
};

export const professorDepartmentNameChange = (text) => {
    return {
        type: PROFESSOR_DEPARTMENT_CHANGE,
        payload: text
    }
};

export const postProfessor = (firstName, familyName, departmentName) => {
    return (dispatch) => {
        dispatch({
            type: POST_PROFESSOR,
            payload: null
        });

        postProfessorAsync(dispatch, firstName, familyName, departmentName);
    };
};

async function postProfessorAsync(dispatch, firstName, familyName, departmentName) {
    let requestBody = {
        department: departmentName,
        firstName: firstName,
        lastName: familyName
    };

    asyncRequestJSONBody(dispatch,
        Constants.API_URL + '/merchant/v1/', requestBody,
        postProfessorSuccess, postProfessorFail);
}

async function postProfessorSuccess(dispatch, response) {
    console.log(response);
    dispatch({
        type: POST_PROFESSOR_SUCCESS,
        payload: response
    });
}

const postProfessorFail = (dispatch, message) => {
    dispatch({
        type: POST_PROFESSOR_FAIL,
        payload: message
    });
};
