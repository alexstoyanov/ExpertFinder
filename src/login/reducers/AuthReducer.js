import {
    EMAIL_CHANGED,
    FORCE_LOGOUT,
    GET_USER_TOKEN,
    GET_USER_TOKEN_FAIL,
    GET_USER_TOKEN_SUCCESS,
    GET_USERS,
    GET_USERS_FAIL,
    GET_USERS_SUCCESS,
    GET_VISIBLE_USERS_SUCCESS,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    NAVIGATE_HOME,
    NAVIGATE_TEACHER_HOME,
    PASSWORD_CHANGED, RESET_SWITCHED_USER_ROLES,
    SET_APP_UPDATE_NEEDED, SET_USER_ROLES,
    SET_USER_SCHOOL_ID,
    SWITCH_USER,
    SWITCH_USER_FAIL,
    SWITCH_USER_SUCCESS,
    TOGGLE_EMAIL_FIELD_FOCUS,
    TOGGLE_PASSWORD_FIELD_FOCUS,
    TOGGLE_PASSWORD_FIELD_VISIBLE,
    SEND_FCM_TOKEN_SUCCESS, SET_CURRENT_USER_NAMES, FORGOT_PASSWORD_EMAIL_CHANGED, RESET_PASSWORD_FAIL, RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS, SAVE_USER_DATA
} from "../../actions/actionTypes";
import * as Strings from "../../utils/Strings";
import {isAnyStrictMode} from "../../utils/Utils";

const INITIAL_STATE = {
    email: '',
    forgotPasswordEmail: '',
    password: '',
    error: '',
    loading: false,
    isLoggedIn: false,
    token: '',
    userRoles: [],
    users: [],
    selectedRoleId: -1,
    isAppUpdateNeeded: false,
    userSchoolId: -999,
    userLoginAttempts: [],
    visibleUsers: [],
    visibleGroups: [],
    isEmailFieldActive: false,
    isPasswordFieldActive: false,
    isPasswordFieldVisible: false,
    forceLogout: false,
    switchedUserRoles: null,
    schoolSettings:{},
    isAnyStrictMode:0,
    currentUserNames: '',
    userData: [],
    hasDataForYear: true,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_FCM_TOKEN_SUCCESS:
            return {...state,
                schoolSettings: action.payload.schoolSettings,
                isAnyStrictMode: isAnyStrictMode(action.payload.schoolSettings),
                users:action.payload.users,
                hasDataForYear: action.payload.users && action.payload.users.length > 0,
            };
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
                userLoginAttempts: [],
            };
        case GET_VISIBLE_USERS_SUCCESS:
            return {
                ...state,
                visibleUsers: action.payload.users,
                visibleGroups: action.payload.groups,
            };
        case LOGIN_USER_FAIL:
            let emailLowerCase = state.email.toLowerCase();
            let userLoginAttemptsArr = state.userLoginAttempts;

            let userLoginAttempt = userLoginAttemptsArr[emailLowerCase] ?
                userLoginAttemptsArr[emailLowerCase] : {timesTried: 0};
            userLoginAttempt.triedAt = new Date();
            userLoginAttempt.timesTried++;
            userLoginAttemptsArr[emailLowerCase] = userLoginAttempt;
            return {
                ...state,
                error: Strings.ERROR_LOGIN,
                loading: false,
                isLoggedIn: false,
                token: '',
                userRoles: [],
                userLoginAttempts: userLoginAttemptsArr,
            };
        case LOGIN_USER:
            if(action.error){
                return {...state, loading: false, error: action.error, userRoles: [],
                    userLoginAttempts: action.resetLoginAttempts
                        ? [] : state.userLoginAttempts};
            }else{
                return {...state, loading: true, error: '', userRoles: [],
                    userLoginAttempts: action.resetLoginAttempts
                        ? [] : state.userLoginAttempts};
            }
        case LOGOUT_USER:
            return {...state, ...INITIAL_STATE};
        case GET_USER_TOKEN:
            return {...state, loading: true, token: ''};
        case GET_USER_TOKEN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                selectedRoleId: action.payload.roleId,
                userSchoolId: action.payload.schoolId
            };
        case GET_USER_TOKEN_FAIL:
            return {...state, loading: false, token: ''};
        case SET_APP_UPDATE_NEEDED:
            return {...state, isAppUpdateNeeded: action.payload};
        case SET_USER_SCHOOL_ID:
            return {...state, userSchoolId: action.payload};
        case SET_USER_ROLES:
            return {...state, userRoles: action.payload};
        case TOGGLE_EMAIL_FIELD_FOCUS:
            return {...state, isEmailFieldActive: action.payload};
        case TOGGLE_PASSWORD_FIELD_FOCUS:
            return {...state, isPasswordFieldActive: action.payload};
        case FORCE_LOGOUT:
            return{...state, forceLogout: true};
        case GET_USERS:
            return {...state, loading: true};
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users:action.payload.users
            };
        case GET_USERS_FAIL:
            return {...state, loading: false};
        case TOGGLE_PASSWORD_FIELD_VISIBLE:
            return{...state, isPasswordFieldVisible: action.payload};
        case SWITCH_USER_SUCCESS:
            return{...state,
                switchedUserRoles: action.payload.user.roles_ids,
                schoolSettings:action.payload.schoolSettings,
                isAnyStrictMode: isAnyStrictMode(action.payload.schoolSettings)
            };
        case SWITCH_USER_FAIL:
            return{...state, switchedUserRoles: null};
        case SWITCH_USER:
            return{...state, switchedUserRoles: null};
        case NAVIGATE_HOME:
            return{...state, switchedUserRoles: null};
        case RESET_SWITCHED_USER_ROLES:
            return{...state, switchedUserRoles: null};
        case NAVIGATE_TEACHER_HOME:
            return{...state, switchedUserRoles: null};
        case SET_CURRENT_USER_NAMES:
            return{...state, currentUserNames: action.payload};
        case FORGOT_PASSWORD_EMAIL_CHANGED:
            return {...state, forgotPasswordEmail: action.payload};
        case RESET_PASSWORD:
            return {...state, loading: true};
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case RESET_PASSWORD_FAIL:
            return {...state, loading: false};
        case SAVE_USER_DATA:
            return{...state, userData: action.payload};
        default:
            return state;
    }
};