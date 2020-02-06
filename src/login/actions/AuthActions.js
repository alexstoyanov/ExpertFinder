import React from 'react';
import {
    EMAIL_CHANGED, FORCE_LOGOUT,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS, LOGOUT_USER,
    PASSWORD_CHANGED, SET_TOKEN,
    TOGGLE_EMAIL_FIELD_FOCUS,
    TOGGLE_PASSWORD_FIELD_FOCUS,
    TOGGLE_PASSWORD_FIELD_VISIBLE,
} from "../../actions/actionTypes";
import * as Constants from "../../utils/Constants";
import {asyncPostRequestUnauthorized} from "../../utils/WebServiceUtils";

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
        asyncPostRequestUnauthorized(dispatch, Constants.API_URL + '/v1/auth/login', formData,
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

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({type: LOGOUT_USER})
    };
};

export const forceLogout = () => {
    return {
        type: FORCE_LOGOUT,
    }
};

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    }
};
