//LOGIN SCREEN ACTIONS
export const OPEN_SPLASH = 'open_splash';

//LOGIN SCREEN ACTIONS
export const LOGIN_USER = 'login_user';
export const EMAIL_CHANGED = 'email_changed';
export const FORGOT_PASSWORD_EMAIL_CHANGED = 'forgot_password_email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FORCE_LOGOUT = 'force_logout';
export const TOGGLE_EMAIL_FIELD_FOCUS = 'toggle_email_field_focus';
export const TOGGLE_PASSWORD_FIELD_FOCUS = 'toggle_password_field_focus';
export const TOGGLE_PASSWORD_FIELD_VISIBLE = 'toggle_password_field_visible';
export const SET_TOKEN = 'set_token';

//RSS ACTIONS
export const GET_CHANNELS = 'get_channels';
export const GET_CHANNELS_SUCCESS = 'get_channels_success';
export const GET_CHANNELS_FAIL = 'get_channels_fail';

//Offers ACTIONS
export const GET_OFFERS_FOR_PROFESSOR = 'get_offers_for_professor';
export const GET_OFFERS_FOR_PROFESSOR_SUCCESS = 'get_offers_for_professor_success';
export const GET_OFFERS_FOR_PROFESSOR_FAIL = 'get_offers_for_professor_fail';
export const DESCRIPTION_CHANGED = 'description_changed';
export const POST_OFFER = 'post_offer';
export const POST_OFFER_SUCCESS = 'post_offer_success';
export const POST_OFFER_FAIL = 'post_offer_fail';
export const GET_ALL_STUDENTS = 'get_all_students';
export const GET_ALL_STUDENTS_SUCCESS = 'get_all_students_success';
export const GET_ALL_STUDENTS_FAIL = 'get_all_students_fail';
export const ASSIGN_STUDENT_OFFER = 'assign_student_offer';
export const ASSIGN_STUDENT_OFFER_SUCCESS = 'assign_student_offer_success';
export const ASSIGN_STUDENT_OFFER_FAIL = 'assign_student_offer_fail';
export const SELECT_OFFER = 'select_offer';
export const SELECT_TIMELINE_ITEM = 'select_timeline_item';
export const GET_OFFERS_FOR_STUDENT = 'get_offers_for_student';
export const GET_OFFERS_FOR_STUDENT_SUCCESS = 'get_offers_for_student_success';
export const GET_OFFERS_FOR_STUDENT_FAIL = 'get_offers_for_student_fail';
export const TOGGLE_OFFER_STATUS_VISIBILITY = 'toggle_offer_status_visibility';
export const SELECT_OFFER_STATUS = 'select_offer_status';
export const TOGGLE_SPECIALITY_VISIBILITY = 'toggle_speciality_visibility';
export const SELECT_OFFER_SPECIALTY = 'select_offer_specialty';
export const SELECT_STUDENT_FILTER = 'select_student_filter';
export const TOGGLE_STUDENTS_MODAL_VISIBILITY = 'toggle_students_modal_visibility';

//PROFESSOR ACTIONS
export const GET_ALL_PROFESSORS = 'get_all_professors';
export const GET_ALL_PROFESSORS_SUCCESS = 'get_all_professors_success';
export const GET_ALL_PROFESSORS_FAIL = 'get_all_professors_fail';
export const PROFESSOR_FIRST_NAME_CHANGE = 'professor_first_name_change';
export const PROFESSOR_FAMILY_NAME_CHANGE = 'professor_family_name_change';
export const POST_PROFESSOR = 'post_professor';
export const POST_PROFESSOR_SUCCESS = 'post_professor_success';
export const POST_PROFESSOR_FAIL = 'post_professor_fail';
export const PROFESSOR_DEPARTMENT_CHANGE = 'professor_department_change';

//STUDENT ACTIONS
export const POST_STUDENT = 'post_student';
export const POST_STUDENT_SUCCESS = 'post_student_success';
export const POST_STUDENT_FAIL = 'post_student_fail';
export const STUDENT_DEPARTMENT_CHANGE = 'student_department_change';
export const STUDENT_FAMILY_NAME_CHANGE = 'student_family_name_change';
export const STUDENT_FIRST_NAME_CHANGE = 'student_first_name_change';
export const STUDENT_FACULTY_NUM_CHANGE = 'student_faculty_num_change';


//NAVIGATION ACTIONS
export const NAVIGATE_APP_STACK = 'App';
export const NAVIGATE_PROFESSOR_HOME = 'ProfessorHome';
export const NAVIGATE_STUDENT_HOME = 'StudentHome';
export const NAVIGATE_OFFER_DETAIL = 'OfferDetail';
export const NAVIGATE_CREATE_OFFER = 'CreateOffer';
export const NAVIGATE_ALL_STUDENTS = 'AllStudents';
export const NAVIGATE_TIMELINE_ITEM_DETAIL = 'TimelineItemDetail';
export const NAVIGATE_LOGIN = 'Auth';
export const NAVIGATE_HOME = 'MainSwitch';
export const NAVIGATE_CREATE_PROFESSOR = 'CreateProfessor';
export const NAVIGATE_CREATE_STUDENT = 'CreateStudent';
export const NAVIGATE_FILTER_OFFERS = 'FilterOffers';

//ERROR ACTIONS
export const RESET_ERROR_MESSAGE = "reset_error_message";