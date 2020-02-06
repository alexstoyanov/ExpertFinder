import {
    EMAIL_CHANGED,
    FORCE_LOGOUT,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    PASSWORD_CHANGED,
    TOGGLE_EMAIL_FIELD_FOCUS,
    TOGGLE_PASSWORD_FIELD_FOCUS,
    TOGGLE_PASSWORD_FIELD_VISIBLE,
    FORGOT_PASSWORD_EMAIL_CHANGED, SET_TOKEN,
} from "../../actions/actionTypes";
import * as Strings from "../../utils/Strings";

const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    loading: false,
    isLoggedIn: false,
    token: '',
    isPasswordFieldVisible: false,
    forceLogout: false,
    currentUserNames: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER_SUCCESS:
            return {
                ...state, ...INITIAL_STATE,
                users: action.payload.users,
                isLoggedIn: true,
                loading: false,
                token: action.payload.api_token,
                forceLogout: false,
            };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: Strings.ERROR_LOGIN,
                loading: false,
                isLoggedIn: false,
                token: '',
                userRoles: [],
            };
        case LOGIN_USER:
            if(action.error){
                return {...state, loading: false, error: action.error, userRoles: []};
            }else{
                return {...state, loading: true, error: '', userRoles: [],
                    userLoginAttempts: action.resetLoginAttempts
                        ? [] : state.userLoginAttempts};
            }
        case LOGOUT_USER:
            return {...state, ...INITIAL_STATE};
        case TOGGLE_EMAIL_FIELD_FOCUS:
            return {...state, isEmailFieldActive: action.payload};
        case TOGGLE_PASSWORD_FIELD_FOCUS:
            return {...state, isPasswordFieldActive: action.payload};
        case FORCE_LOGOUT:
            return{...state, forceLogout: true};
        case TOGGLE_PASSWORD_FIELD_VISIBLE:
            return{...state, isPasswordFieldVisible: action.payload};
        case FORGOT_PASSWORD_EMAIL_CHANGED:
            return {...state, forgotPasswordEmail: action.payload};
        case SET_TOKEN:
            return{...state, token: action.payload};
        default:
            return state;
    }
};