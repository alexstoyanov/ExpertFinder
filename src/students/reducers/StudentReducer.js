import {
    GET_ALL_STUDENTS, GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_SUCCESS,
    POST_STUDENT_SUCCESS, STUDENT_DEPARTMENT_CHANGE, STUDENT_FACULTY_NUM_CHANGE, STUDENT_FAMILY_NAME_CHANGE,
    STUDENT_FIRST_NAME_CHANGE, STUDENT_MULTIPLE_JSON_CHANGE
} from "../../actions/actionTypes";

const INITIAL_STATE = {
    students: [],
    studentFacultyNumber:"",
    studentFirstName: "",
    studentFamilyName: "",
    studentDepartment: "",
    studentMultipleJSON: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_STUDENTS:
            return {
                ...state,
                students: [],
            };
        case GET_ALL_STUDENTS_SUCCESS:
            return {
                ...state,
                students: action.payload,
            };
        case GET_ALL_STUDENTS_FAIL:
            return {
                ...state,
                students: [],
            };
        case STUDENT_DEPARTMENT_CHANGE:
            return{
                ...state,
                studentDepartment: action.payload
            };
        case STUDENT_FIRST_NAME_CHANGE:
            return{
                ...state,
                studentFirstName: action.payload
            };
        case STUDENT_FAMILY_NAME_CHANGE:
            return{
                ...state,
                studentFamilyName: action.payload
            };
        case STUDENT_FACULTY_NUM_CHANGE:
            return{
                ...state,
                studentFacultyNumber: action.payload
            };
        case STUDENT_MULTIPLE_JSON_CHANGE:
            return{
                ...state,
                studentMultipleJSON: action.payload
            };
        case POST_STUDENT_SUCCESS:
            return {
                ...state,
                students: [...state.students, action.payload]
            };
        default:
            return state;
    }
};