import {
    GET_ALL_PROFESSORS, GET_ALL_PROFESSORS_FAIL, GET_ALL_PROFESSORS_SUCCESS,
    POST_PROFESSOR_SUCCESS, PROFESSOR_DEPARTMENT_CHANGE, PROFESSOR_FAMILY_NAME_CHANGE, PROFESSOR_FIRST_NAME_CHANGE
} from "../../actions/actionTypes";

const INITIAL_STATE = {
    professors: [],
    professorFirstName: "",
    professorFamilyName: "",
    professorDepartment: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_PROFESSORS:
            return {
                ...state,
                professors: [],
            };
        case GET_ALL_PROFESSORS_SUCCESS:
            return {
                ...state,
                professors: action.payload,
            };
        case GET_ALL_PROFESSORS_FAIL:
            return {
                ...state,
                professors: [],
            };
        case PROFESSOR_FIRST_NAME_CHANGE:
            return{
                ...state,
                professorFirstName: action.payload
            };
        case PROFESSOR_FAMILY_NAME_CHANGE:
            return{
                ...state,
                professorFamilyName: action.payload
            };
        case PROFESSOR_DEPARTMENT_CHANGE:
            return{
                ...state,
                professorDepartment: action.payload
            };
        default:
            return state;
    }
};