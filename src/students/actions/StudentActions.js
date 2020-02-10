import React from 'react';
import {
    GET_ALL_STUDENTS, GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_SUCCESS, POST_STUDENT, POST_STUDENT_FAIL,
    POST_STUDENT_SUCCESS, STUDENT_DEPARTMENT_CHANGE,
    STUDENT_FAMILY_NAME_CHANGE,
    STUDENT_FIRST_NAME_CHANGE,
    STUDENT_FACULTY_NUM_CHANGE
} from "../../actions/actionTypes";
import * as Constants from "../../utils/Constants";
import {asyncGetRequest, asyncRequestJSONBody} from "../../utils/WebServiceUtils";

export const getStudents = () => {
    return (dispatch) => {
        dispatch({
            type: GET_ALL_STUDENTS,
            payload: null
        });
        getStudentsAsync(dispatch);
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

export const studentFirstNameChange = (text) => {
    return {
        type: STUDENT_FIRST_NAME_CHANGE,
        payload: text
    }
};

export const studentFamilyNameChange = (text) => {
    return {
        type: STUDENT_FAMILY_NAME_CHANGE,
        payload: text
    }
};

export const studentDepartmentNameChange = (text) => {
    return {
        type: STUDENT_DEPARTMENT_CHANGE,
        payload: text
    }
};

export const studentFacultyNumChange = (text) => {
    return {
        type: STUDENT_FACULTY_NUM_CHANGE,
        payload: text
    }
};

export const postStudent = (facultyNumber, firstName, familyName, departmentName) => {
    return (dispatch) => {
        dispatch({
            type: POST_STUDENT,
            payload: null
        });

        postStudentAsync(dispatch,facultyNumber, firstName, familyName, departmentName);
    };
};

async function postStudentAsync(dispatch,facultyNumber, firstName, familyName, departmentName) {
    let requestBody = {
        facultyNumber: facultyNumber,
        specialty: departmentName,
        firstName: firstName,
        lastName: familyName
    };

    asyncRequestJSONBody(dispatch,
        Constants.API_URL + '/student/v1/', requestBody,
        postStudentSuccess, postStudentFail);
}

async function postStudentSuccess(dispatch, response) {
    console.log(response);
    dispatch({
        type: POST_STUDENT_SUCCESS,
        payload: response
    });
}

const postStudentFail = (dispatch, message) => {
    dispatch({
        type: POST_STUDENT_FAIL,
        payload: message
    });
};
