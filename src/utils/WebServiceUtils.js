import {FORCE_LOGOUT} from "../actions/actionTypes";

export async function getRequest(url, headers) {
    return fetch(url,
        {
            method: 'GET',
            headers
        })
}

export async function postRequest(url, formData) {
    return fetch(url,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
}

export async function putRequest(url) {
    return fetch(url,
        {
            method: 'PUT'
        })
}

export async function requestJsonBody(url, jsonBody, method) {
    return fetch(url,
        {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: jsonBody
        })
}

export async function asyncPostRequestUnauthorized(dispatch, url, formData, successCallback, failCallback) {
    postRequest(url, formData)
        .then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
        })
        .then(([status, responseJson]) => {
            successCallback(dispatch, responseJson);
        })
        .catch((error) => {
            failCallback(dispatch, error);
        });
}

export async function asyncPutRequestUnauthorized(dispatch, url, successCallback, failCallback) {
    console.log(url);
    putRequest(url)
        .then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
        })
        .then(([status, responseJson]) => {
            console.log(responseJson);
            successCallback(dispatch, responseJson);
        })
        .catch((error) => {
            failCallback(dispatch, error);
        });
}

export async function asyncRequestJSONBody(dispatch, url, jsonBody, successCallback, failCallback, method = 'POST') {
    console.log(url);
    console.log(JSON.stringify(jsonBody));
    requestJsonBody(url, JSON.stringify(jsonBody), method)
        .then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
        })
        .then(([status, responseJson]) => {
            console.log(status);
            if (status == 401) {
                dispatch({type: FORCE_LOGOUT});
                failCallback(dispatch, 401);
            } else {
                successCallback(dispatch, responseJson);
            }
        })
        .catch((error) => {
            failCallback(dispatch, error);
        });
}

export async function asyncGetRequest(dispatch, url, successCallback, failCallback, headers = {}) {
    console.log(url);
    getRequest(url, headers)
        .then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
        })
        .then(([status, responseJson]) => {
            console.log(responseJson);
            if (status == 401) {
                dispatch({type: FORCE_LOGOUT});
                failCallback(dispatch, 401);
            } else {
                successCallback(dispatch, responseJson);
            }
        })
        .catch((error) => {
            failCallback(dispatch, error);
        });
}

export function dispatchEvent(dispatch, type, payload, success = "", error = "") {
    dispatch({
        type: type,
        payload: payload,
        success: success,
        error: error,
    });
}