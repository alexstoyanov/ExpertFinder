import store from '../store/index';
import {FORCE_LOGOUT} from "../actions/actionTypes";

export async function getRequest(url) {
    const {getToken} = store;
    const token = await getToken();
    if (token !== null) {
        return fetch(url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            })
    }
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

export async function requestAuthorizedJsonBody(url, jsonBody, method) {
    const {getToken} = store;
    const token = await getToken();
    if (token !== null) {
        return fetch(url,
            {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: jsonBody
            })
    }
}

export async function postRequestAuthorizedFormData(url, formData) {
    const {getToken} = store;
    const token = await getToken();
    if (token !== null) {
        return fetch(url,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token
                },
                body: formData
            })
    }
}

export async function asyncPostRequestUnauthorized(dispatch, url, formData, successCallback, failCallback) {
    postRequest(url, formData)
        .then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
        })
        .then(([status, responseJson]) => {
            let isError = status !== 200;
            if (isError) {
                failCallback(dispatch, responseJson.message);
            } else {
                successCallback(dispatch, responseJson);
            }
        })
        .catch((error) => {
            failCallback(dispatch, error);
        });
}

export async function asyncRequestJSONBody(dispatch, url, jsonBody, successCallback, failCallback, method = 'POST') {
    requestAuthorizedJsonBody(url, JSON.stringify(jsonBody), method)
        .then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
        })
        .then(([status, responseJson]) => {
            if (status == 401) {
                dispatch({type: FORCE_LOGOUT});
                failCallback(dispatch, 401);
            } else {
                let isError = status !== 200;
                if (isError) {
                    failCallback(dispatch, responseJson.message);
                } else {
                    successCallback(dispatch, responseJson);
                }
            }
        })
        .catch((error) => {
            failCallback(dispatch, error);
        });
}

export async function asyncPostRequestFormData(dispatch, url, formData, successCallback, failCallback) {
    postRequestAuthorizedFormData(url, formData)
        .then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
        })
        .then(([status, responseJson]) => {
            if (status == 401) {
                failCallback(dispatch, responseJson.message);
                dispatch({type: FORCE_LOGOUT});
                failCallback(dispatch, 401);
            } else {
                let isError = status !== 200;
                if (isError) {
                    failCallback(dispatch, responseJson.message);
                } else {
                    successCallback(dispatch, responseJson);
                }
            }
        })
        .catch((error) => {
            failCallback(dispatch, error);
        });
}

export async function asyncGetRequest(dispatch, url, successCallback, failCallback) {
    getRequest(url)
        .then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
        })
        .then(([status, responseJson]) => {
            if (status == 401) {
                dispatch({type: FORCE_LOGOUT});
                failCallback(dispatch, 401);
            } else {
                let isError = status !== 200;
                if (isError) {
                    failCallback(dispatch, responseJson.message);
                } else {
                    successCallback(dispatch, responseJson);
                }
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