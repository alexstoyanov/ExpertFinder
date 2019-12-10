import React from 'react';
import {
    EMAIL_CHANGED,
    FORCE_LOGOUT, FORGOT_PASSWORD_EMAIL_CHANGED,
    GET_USERS,
    GET_USERS_FAIL,
    GET_USERS_SUCCESS,
    GET_VISIBLE_USERS,
    GET_VISIBLE_USERS_SUCCESS,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    NAVIGATE_LOGIN,
    PASSWORD_CHANGED, RESET_PASSWORD, RESET_PASSWORD_FAIL, RESET_PASSWORD_SUCCESS,
    RESET_SWITCHED_USER_ROLES, SAVE_USER_DATA,
    SEND_FCM_TOKEN_SUCCESS,
    SET_APP_UPDATE_NEEDED, SET_CURRENT_USER_NAMES,
    SET_USER_ROLES,
    SET_USER_SCHOOL_ID,
    SWITCH_USER,
    SWITCH_USER_FAIL,
    SWITCH_USER_SUCCESS,
    TOGGLE_EMAIL_FIELD_FOCUS,
    TOGGLE_PASSWORD_FIELD_FOCUS,
    TOGGLE_PASSWORD_FIELD_VISIBLE,
} from "../../actions/actionTypes";
import * as Constants from "../../utils/Constants";
import {
    asyncGetRequest,
    asyncPostRequestFormData,
    asyncPostRequestUnauthorized,
    dispatchEvent
} from "../../utils/WebServiceUtils";

export const emailChange = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChange = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const toggleEmailFieldFocus = (isFieldFocused) => {
    return {
        type: TOGGLE_EMAIL_FIELD_FOCUS,
        payload: isFieldFocused
    }
};

export const togglePasswordFieldFocus = (isFieldFocused) => {
    return {
        type: TOGGLE_PASSWORD_FIELD_FOCUS,
        payload: isFieldFocused
    }
};

export const togglePasswordFieldVisible = (isFieldVisible) => {
    return {
        type: TOGGLE_PASSWORD_FIELD_VISIBLE,
        payload: isFieldVisible
    }
};

export const loginUser = ({email, password}, resetLoginAttempts = false, error = null) => {
    return (dispatch) => {
        loginUserAsync(dispatch, email, password, resetLoginAttempts, error);
    };
};

async function loginUserAsync(dispatch, email, password, resetLoginAttempts = false, error = null) {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    dispatch({
        type: LOGIN_USER,
        resetLoginAttempts: resetLoginAttempts,
        error: error
    });
    if (!error) {
        asyncPostRequestUnauthorized(dispatch, Constants.SHKOLO_API_URL + '/v1/auth/login', formData,
            loginUserSuccess, loginUserFail);
    }
}

async function loginUserSuccess(dispatch, loginResponse) {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: loginResponse
    });
}

const loginUserFail = (dispatch, message) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        error: message
    });
};