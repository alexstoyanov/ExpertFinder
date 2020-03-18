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
export const ITEM_DESCRIPTION_CHANGED = 'item_description_changed';
export const ITEM_TITLE_CHANGED = 'item_title_changed';
export const POST_RSS_ITEM = 'post_rss_item';
export const POST_RSS_ITEM_SUCCESS = 'post_rss_item_success';
export const POST_RSS_ITEM_FAIL = 'post_rss_item_fail';
export const SET_RSS_CHANNELS = 'set_rss_channels';

//Offers ACTIONS
export const GET_OFFERS_FOR_PROFESSOR = 'get_offers_for_professor';
export const GET_OFFERS_FOR_PROFESSOR_SUCCESS = 'get_offers_for_professor_success';
export const GET_OFFERS_FOR_PROFESSOR_FAIL = 'get_offers_for_professor_fail';
export const TITLE_CHANGED = 'title_changed';
export const PRICE_CHANGED = 'price_changed';
export const ITEM_DESC_CHANGED = 'item_desc_changed';
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
export const ACCEPT_STUDENT_OFFER = 'accept_student_offer';
export const ACCEPT_STUDENT_OFFER_SUCCESS = 'accept_student_offer_success';
export const ACCEPT_STUDENT_OFFER_FAIL = 'accept_student_offer_fail';
export const DECLINE_STUDENT_OFFER = 'decline_student_offer';
export const DECLINE_STUDENT_OFFER_SUCCESS = 'decline_student_offer_success';
export const DECLINE_STUDENT_OFFER_FAIL = 'decline_student_offer_fail';

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
export const STUDENT_MULTIPLE_JSON_CHANGE = 'student_multiple_json_change';

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
export const NAVIGATE_CREATE_MULTIPLE_STUDENTS = 'CreateMultipleStudents';
export const NAVIGATE_FILTER_OFFERS = 'FilterOffers';
export const NAVIGATE_STUDENT_OFFER_DETAIL = 'StudentOfferDetails';
export const NAVIGATE_MESSAGES = 'Messages';
export const NAVIGATE_CREATE_MESSAGE_THREAD = 'CreateMessageThread';
export const NAVIGATE_CHOOSE_PARTICIPANTS = 'ChooseParticipants';
export const NAVIGATE_THREAD_DETAILS = 'ThreadDetails';
export const NAVIGATE_CREATE_RSS_ITEM = 'CreateRssItem';

//MESSAGE THREADS ACTIONS
export const GET_THREADS = 'get_threads';
export const GET_THREADS_SUCCESS = 'get_threads_success';
export const GET_THREADS_FAIL = 'get_threads_fail';
export const GET_MESSAGES = 'get_messages';
export const GET_MESSAGES_SUCCESS = 'get_messages_success';
export const GET_MESSAGES_FAIL = 'get_messages_fail';
export const GET_PARTICIPANTS = 'get_participants';
export const GET_PARTICIPANTS_SUCCESS = 'get_participants_success';
export const GET_PARTICIPANTS_FAIL = 'get_participants_fail';
export const SET_SELECTED_MESSAGE_THREAD = 'set_selected_message_thread';
export const SET_SELECTED_MESSAGE = 'set_selected_message';
export const SEND_MESSAGE = 'send_message';
export const SEND_MESSAGE_SUCCESS = 'send_message_success';
export const SEND_MESSAGE_FAIL = 'send_message_fail';
export const FIND_PARTICIPANTS = 'find_participants';
export const SELECT_PARTICIPANT = 'select_participant';
export const CLEAR_CREATE_MESSAGE_THREAD = 'clear_create_message_thread';
export const DELETE_SELECTED_PARTICIPANT = 'delete_selected_participant';
export const SEND_MESSAGE_THREAD = 'send_message_thread';
export const SEND_MESSAGE_THREAD_SUCCESS = 'send_message_thread_success';
export const SEND_MESSAGE_THREAD_FAIL = 'send_message_thread_fail';
export const SUBJECT_CHANGED = 'subject_changed';
export const MESSAGE_BODY_CHANGED = 'message_body_changed';
export const SEND_MESSAGE_THREAD_READ = 'message_thread_read';
export const SEND_MESSAGE_THREAD_READ_SUCCESS = 'message_thread_read_success';
export const SEND_MESSAGE_THREAD_READ_FAIL = 'message_thread_read_fail';
export const SET_SHOULD_UPDATE_THREADS = 'set_should_update_threads';
export const TOGGLE_MUTE_NOTIFICATIONS = 'toggle_mute_notifications';
export const TOGGLE_MUTE_NOTIFICATIONS_SUCCESS = 'toggle_mute_notifications_success';
export const TOGGLE_MUTE_NOTIFICATIONS_FAIL = 'toggle_mute_notifications_fail';
export const QUERY_THREADS = 'query_threads';
export const TOGGLE_FORBID_RESPONSE = 'toggle_forbid_response';
export const TOGGLE_FORBID_RESPONSE_SUCCESS = 'toggle_forbid_response_success';
export const TOGGLE_FORBID_RESPONSE_FAIL = 'toggle_forbid_response_fail';
export const TOGGLE_HIDE_PARTICIPANTS = 'toggle_hide_participants';
export const TOGGLE_HIDE_PARTICIPANTS_SUCCESS = 'toggle_hide_participants_success';
export const TOGGLE_HIDE_PARTICIPANTS_FAIL = 'toggle_hide_participants_fail';
export const RESET_NEW_MESSAGE_THREAD = 'reset_new_message_thread';
export const SET_MESSAGE_THREADS = 'set_new_message_thread';

//ERROR ACTIONS
export const RESET_ERROR_MESSAGE = "reset_error_message";