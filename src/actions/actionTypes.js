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

//NAVIGATION ACTIONS
export const NAVIGATE_APP_STACK = 'App';
export const NAVIGATE_PROFESSOR_HOME = 'ProfessorHome';
export const NAVIGATE_STUDENT_HOME = 'StudentHome';
export const NAVIGATE_OFFER_DETAIL = 'OfferDetail';
export const NAVIGATE_CREATE_OFFER = 'CreateOffer';
export const NAVIGATE_ALL_STUDENTS = 'AllStudents';
export const NAVIGATE_TIMELINE_ITEM_DETAIL = 'TimelineItemDetail';
export const NAVIGATE_LOGIN = 'Auth';
export const NAVIGATE_HOME = 'Home';

//ERROR ACTIONS
export const RESET_ERROR_MESSAGE = "reset_error_message";