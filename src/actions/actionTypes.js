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
export const GET_USER_TOKEN = 'get_user_token';
export const GET_USER_TOKEN_SUCCESS = 'get_user_token_success';
export const GET_USER_TOKEN_FAIL = 'get_user_token_fail';
export const SEND_FCM_TOKEN_SUCCESS = 'send_fcm_token_success';
export const SET_APP_UPDATE_NEEDED = "set_app_update_needed";
export const SET_USER_SCHOOL_ID = 'set_user_school_id';
export const FORCE_LOGOUT = 'force_logout';
export const TOGGLE_EMAIL_FIELD_FOCUS = 'toggle_email_field_focus';
export const TOGGLE_PASSWORD_FIELD_FOCUS = 'toggle_password_field_focus';
export const GET_VISIBLE_USERS = 'get_visible_users';
export const GET_VISIBLE_USERS_SUCCESS = 'get_visible_users_success';
export const TOGGLE_PASSWORD_FIELD_VISIBLE = 'toggle_password_field_visible';
export const RESET_SWITCHED_USER_ROLES = 'reset_switched_user_roles';
export const SET_USER_ROLES = 'set_user_roles';
export const SET_CURRENT_USER_NAMES = 'set_current_user_names';
export const SAVE_USER_DATA = 'save_user_data';

//SETTINGS SCREEN ACTIONS
export const CLEAR_NEW_ROLE_SETTINGS = 'clear_new_role_settings';
export const GET_IDENTITY_USERS = 'get_identity_users';
export const GET_IDENTITY_USERS_SUCCESS = 'get_identity_users_success';
export const GET_IDENTITY_USERS_FAIL = 'get_identity_users_fail';
export const GET_NEW_ROLE_USER_TOKEN = 'get_new_role_user_token';
export const GET_NEW_ROLE_USER_TOKEN_SUCCESS = 'get_new_role_user_token_success';
export const GET_NEW_ROLE_USER_TOKEN_FAIL = 'get_new_role_user_token_fail';

//ADMIN ACTIONS
export const GET_USERS = 'get_users';
export const GET_USERS_SUCCESS = 'get_users_success';
export const GET_USERS_FAIL = 'get_users_fail';
export const SET_ROLE_FILTER = 'set_role_filter';
export const GET_USER_DETAILS = 'get_user_details';
export const GET_USER_DETAILS_SUCCESS = 'get_user_details_success';
export const GET_USER_DETAILS_FAIL = 'get_user_details_fail';

//NAVIGATION ACTIONS
export const NAVIGATE_APP_STACK = 'App';
export const NAVIGATE_HOME = 'MainTabsSwitch';
export const NAVIGATE_TEACHER_HOME = 'TeacherHome';
export const NAVIGATE_LOGIN = 'Login';
export const NAVIGATE_LOGOUT = 'Logout';
export const NAVIGATE_CLASSES = 'Classes';
export const NAVIGATE_STUDENTS = 'Students';
export const NAVIGATE_STUDENT_REPORT_CARD = 'StudentReportCard';
export const NAVIGATE_MESSAGES = 'Messages';
export const NAVIGATE_THREAD_DETAILS = 'ThreadDetails';
export const NAVIGATE_CREATE_MESSAGE_THREAD = 'CreateMessageThread';
export const NAVIGATE_SELECTED_PARTICIPANTS = 'SelectedParticipants';
export const NAVIGATE_CHOOSE_PARTICIPANTS = 'ChooseParticipants';
export const NAVIGATE_SELECTED_GRADE = 'GradeInfo';
export const NAVIGATE_SCHEDULE = 'WeeklySchedule';
export const NAVIGATE_CREATE_STUDENT_ABSENCE = 'CreateStudentAbsence';
export const NAVIGATE_SELECT_STUDENTS = 'SelectStudents';
export const NAVIGATE_ADD_GRADES = 'AddGrades';
export const NAVIGATE_ADD_SINGLE_GRADE = 'AddSingleGrade';
export const NAVIGATE_BACK = 'NavigateBack';
export const NAVIGATE_BADGES = 'Badges';
export const NAVIGATE_EVENT_DETAILS = 'EventDetails';
export const NAVIGATE_EVENT_DETAILS_SCREEN = 'EventDetailsScreen';
export const NAVIGATE_INVITE_DETAILS = 'InviteDetails';
export const NAVIGATE_SELECT_STUDENTS_FOR_BADGE = 'SelectStudentsForBadge';
export const NAVIGATE_ROLE_PICKER = 'RolePicker';
export const NAVIGATE_ADD_PICKER = 'AddPicker';
export const NAVIGATE_EVENT_TYPE_PICKER = 'EventTypePicker';
export const NAVIGATE_MESSAGE_THREADS = 'MessageThreads';
export const NAVIGATE_SCHEDULE_CLASSES = 'Schedule';
export const NAVIGATE_MY_EVENTS = 'MyEvents';
export const NAVIGATE_ALL_EVENTS = 'AllEvents';
export const NAVIGATE_SCHOOL_CALENDAR = 'SchoolCalendar';
export const NAVIGATE_QUICK_ACTIONS = 'QuickActions';
export const NAVIGATE_SETTINGS = 'Settings';
export const NAVIGATE_SETTINGS_ROLE_PICKER = 'SettingsRolePicker';
export const NAVIGATE_SELECT_SCHOOL = 'SelectSchool';
export const NAVIGATE_CHANGE_SCHOOL = 'ChangeSchool';
export const SHOW_ERROR = 'show_error';
export const SHOW_SUCCESS = 'show_success';
export const NAVIGATE_STUDENT_EVENTS = 'StudentEvents';
export const NAVIGATE_MICROSOFT_LOGIN = 'MicrosoftLogin';
export const NAVIGATE_USER_DETAILS = 'UserDetails';
export const NAVIGATE_USERS_ADMIN = 'UsersAdmin';
export const NAVIGATE_CLASS_DIARY = 'ClassDiary';
export const NAVIGATE_CLASS_PICKER = 'ClassPicker';
export const NAVIGATE_ADD_MULTIPLE_ABSENCES = 'AddMultipleAbsences';
export const NAVIGATE_ADD_MULTIPLE_ABSENCES_FOR_SHI = 'AddMultipleAbsencesForShi';
export const NAVIGATE_ADD_MULTIPLE_FEEDBACK_FOR_SHI = 'AddMultipleFeedbackForShi';
export const NAVIGATE_ADD_MULTIPLE_GRADES = 'AddMultipleGrades';
export const NAVIGATE_ADD_MULTIPLE_GRADES_FOR_SHI = 'AddMultipleGradesForShi';
export const NAVIGATE_ABSENCES = 'AbsencesNavigator';
export const NAVIGATE_GRADES_FOR_COURSE = 'GradesForCourse';
export const NAVIGATE_STUDENT_FEEDBACK = 'FeedbackTypeNavigator';
export const NAVIGATE_ADD_MULTIPLE_FEEDBACK = 'AddMultipleFeedback';
export const NAVIGATE_SELECT_BADGES = 'SelectBadges';
export const NAVIGATE_GRADES_FOR_STUDENTS = 'GradesForStudent';
export const NAVIGATE_SHI_STUDENT_DETAILS_ABSENCES = 'SHIStudentDetailsAbsences';
export const NAVIGATE_SHI_STUDENT_DETAILS_GRADES = 'SHIStudentDetailsGrades';
export const NAVIGATE_SELECT_TOPIC = 'SelectTopic';
export const NAVIGATE_SHI_TABS = 'SHITabs';
export const NAVIGATE_STUDENT_DIARY = 'StudentDiary';
export const NAVIGATE_SHI_STUDENT_DETAILS_FEEDBACK = 'SHIStudentDetailsFeedback';
export const NAVIGATE_FORGOT_PASSWORD = 'ForgotPassword';
export const NAVIGATE_RATE_IN_STORE = 'RateInStore';
export const NAVIGATE_RATE_SHKOLO = 'RateShkolo';
export const NAVIGATE_RATE_SWITCH = 'RateSwitch';

//CLASS BOOK ACTIONS
export const SET_NEW_DIARY_ITEM_ID = 'set_new_diary_item_id';
export const GET_GRADES_FOR_COURSES = 'get_grades_for_courses';
export const GET_GRADES_FOR_COURSES_SUCCESS = 'get_grades_for_courses_success';
export const GET_GRADES_FOR_COURSES_FAIL = 'get_grades_for_courses_fail';
export const SELECTED_ALL_FOR_ABSENCE = 'selected_all_for_absence';
export const SELECTED_ALL_FOR_ABSENCE_FOR_SHI = 'selected_all_for_absence_for_shi';
export const TOGGLE_ADD_ABSENCE_EXPANDED = 'toggle_add_absence_expanded';
export const TOGGLE_ABSENCE_EXPANDED = 'toggle_absence_expanded';
export const GET_ABSENCES_SUMMARY_BY_PUPIL = 'get_absences_summary_by_pupil';
export const GET_ABSENCES_SUMMARY_BY_PUPIL_SUCCESS = 'get_absences_success_summary_by_pupil';
export const GET_ABSENCES_SUMMARY_BY_PUPIL_FAIL = 'get_absences_fail_summary_by_pupil';
export const GET_ABSENCES_FOR_STUDENT = 'get_absences_for_student';
export const GET_ABSENCES_FOR_STUDENT_SUCCESS = 'get_absences_for_student_success';
export const GET_ABSENCES_FOR_STUDENT_FAIL = 'get_absences_for_student_fail';
export const SELECT_COURSE = 'select_course';
export const SELECT_VIRTUAL_COURSE = 'select_virtual_course';
export const GET_CLASSES = 'get_classes';
export const GET_CLASSES_SUCCESS = 'get_classes_success';
export const GET_CLASSES_FAIL = 'get_classes_fail';
export const GET_GRADES = 'get_grades';
export const GET_GRADES_SUCCESS = 'get_grades_success';
export const GET_GRADES_FAIL = 'get_grades_fail';
export const GET_ABSENCES_BY_CLASS = 'get_absences_by_class';
export const GET_ABSENCES_BY_CLASS_SUCCESS = 'get_absences_by_class_success';
export const GET_ABSENCES_BY_CLASS_FAIL = 'get_absences_by_class_fail';
export const GET_COURSES = 'get_courses';
export const GET_COURSES_SUCCESS = 'get_courses_success';
export const GET_COURSES_FAIL = 'get_courses_fail';
export const ADD_ABSENCE = 'add_absence';
export const ADD_ABSENCE_FOR_SHI = 'add_absence_for_shi';
export const REMOVE_ABSENCE = 'remove_absence';
export const REMOVE_ABSENCE_FOR_SHI = 'remove_absence_for_shi';
export const UPDATE_ABSENCE = 'update_absence';
export const UPDATE_ABSENCE_FOR_SHI = 'update_absence_for_shi';
export const RESET_NEW_ABSENCES = 'reset_new_absences';
export const RESET_NEW_ABSENCES_FOR_SHI = 'reset_new_absences_for_shi';
export const RESET_SELECTED_BADGES = 'reset_selected_badges';
export const CLEAR_NEW_GRADES = 'clear_new_grades';
export const ADD_GRADE = 'add_grade';
export const REMOVE_GRADE = 'remove_grade';
export const UPDATE_GRADE = 'update_grade';
export const POST_GRADES = 'post_grades';
export const POST_GRADES_SUCCESS = 'post_grades_success';
export const POST_GRADES_FAIL = 'post_grades_fail';
export const DELETE_GRADE = 'delete_grade';
export const DELETE_GRADE_FAIL = 'delete_grade_fail';
export const DELETE_GRADE_SUCCESS = 'delete_grade_success';
export const POST_ABSENCES = 'post_absences';
export const POST_ABSENCES_SUCCESS = 'post_absences_success';
export const POST_ABSENCES_FAIL = 'post_absences_fail';
export const GET_PUPIL_BADGES = 'get_pupil_badges';
export const GET_PUPIL_BADGES_SUCCESS = 'get_pupil_badges_success';
export const GET_PUPIL_BADGES_FAIL = 'get_pupil_badges_fail';
export const POST_FEEDBACK = 'post_feedback';
export const POST_FEEDBACK_SUCCESS = 'post_feedback_success';
export const POST_FEEDBACK_FAIL = 'post_feedback_fail';
export const CLEAR_NEW_BADGES = 'clear_new_badges';
export const GET_FEEDBACK_FOR_PUPIL = 'get_feedback_for_pupil';
export const GET_FEEDBACK_FOR_PUPIL_SUCCESS = 'get_feedback_for_pupil_success';
export const GET_FEEDBACK_FOR_PUPIL_FAIL = 'get_feedback_for_pupil_fail';
export const GET_GRADE_TYPES = "get_grade_types";
export const GET_GRADE_TYPES_SUCCESS = "get_grade_types_success";
export const GET_GRADE_TYPES_FAIL = "get_grade_types_fail";
export const GET_PUPILS_GRADE_SYSTEMS = "get_pupils_grade_systems";
export const GET_PUPILS_GRADE_SYSTEMS_SUCCESS = "get_pupils_grade_systems_success";
export const GET_PUPILS_GRADE_SYSTEMS_FAIL = "get_pupils_grade_systems_fail";
export const SELECT_TYPE_FOR_GRADE = 'select_type_for_grade';
export const SELECTED_ALL_FOR_GRADE = 'selected_all_for_grade';
export const SELECTED_ALL_FOR_FEEDBACK = 'selected_all_for_feedback';
export const SELECT_PUPIL = 'select_pupil';
export const REMOVE_PUPIL = 'remove_pupil';
export const UPDATE_FEEDBACK = 'update_feedback';
export const SELECT_TERM = 'select_term';
export const SELECT_BADGE = 'select_badge';
export const REMOVE_BADGE = 'remove_badge';
export const GET_MY_COURSES = 'get_my_courses';
export const GET_MY_COURSES_SUCCESS = 'get_my_courses_success';
export const GET_MY_COURSES_FAIL = 'get_my_courses_fail';
export const SELECT_SHI = 'select_shi';
export const GET_ABSENCES_BY_CLASS_AND_SHI = 'get_absences_by_class_shi';
export const GET_ABSENCES_BY_CLASS_AND_SHI_SUCCESS = 'get_absences_by_class_shi_success';
export const GET_ABSENCES_BY_CLASS_AND_SHI_FAIL = 'get_absences_by_class_shi_fail';
export const GET_GRADES_FOR_STUDENT = 'get_grades_for_student';
export const GET_GRADES_FOR_STUDENT_SUCCESS = 'get_grades_for_student_success';
export const GET_GRADES_FOR_STUDENT_FAIL = 'get_grades_for_student_fail';
export const TOGGLE_GRADE_DETAIL_EXPANDED = 'toggle_grade_detail_expanded';
export const TOGGLE_ADD_GRADE_EXPANDED = 'toggle_add_grade_expanded';
export const SWITCH_USER = 'switch_user';
export const SWITCH_USER_SUCCESS = 'switch_user_success';
export const SWITCH_USER_FAIL = 'switch_user_fail';
export const GET_PUPILS_FOR_CLASS = 'get_pupils_for_class';
export const GET_PUPILS_FOR_CLASS_SUCCESS = 'get_pupils_for_class_success';
export const GET_PUPILS_FOR_CLASS_FAIL = 'get_pupils_for_class_fail';
export const TOGGLE_FEEDBACK_EXPANDED = 'toggle_feedback_expanded';
export const TOGGLE_ADD_FEEDBACK_EXPANDED = 'toggle_add_feedback_expanded';
export const GET_GRADES_SUMMARY_BY_PUPIL = 'get_grades_summary_by_pupil';
export const GET_GRADES_SUMMARY_BY_PUPIL_SUCCESS = 'get_grades_success_summary_by_pupil';
export const GET_GRADES_SUMMARY_BY_PUPIL_FAIL = 'get_grades_fail_summary_by_pupil';
export const SELECT_LESSON = 'select_lesson';
export const GET_PUPILS_FOR_USER = 'get_pupils_for_user';
export const GET_PUPILS_FOR_USER_SUCCESS = 'get_pupils_for_user_success';
export const GET_PUPILS_FOR_USER_FAIL = 'get_pupils_for_user_fail';
export const GET_FEEDBACK_SUMMARY_BY_PUPIL = 'get_absences_summary_by_pupil';
export const GET_FEEDBACK_SUMMARY_BY_PUPIL_SUCCESS = 'get_feedback_success_summary_by_pupil';
export const GET_FEEDBACK_SUMMARY_BY_PUPIL_FAIL = 'get_feedback_fail_summary_by_pupil';
export const SELECT_BADGES_FOR_STUDENT = 'select_badges_for_student';
export const GET_BADGES = 'get_badges';
export const GET_BADGES_SUCCESS = 'get_badges_success';
export const GET_BADGES_FAIL = 'get_badges_fail';
export const TOGGLE_COURSE_PICKER_VISIBILITY = 'toggle_course_picker_visibility';
export const TOGGLE_GRADE_TYPE_PICKER_VISIBILITY = 'toggle_grade_type_picker_visibility';
export const RESET_PASSWORD = 'reset_password';
export const RESET_PASSWORD_SUCCESS = 'reset_password_success';
export const RESET_PASSWORD_FAIL = 'reset_password_fail';
export const REASON_OF_DELETION_CHANGE = 'reason_of_deletion_change';
export const FILTER_FORM_OF_STUDY = 'filter_form_of_study';
export const GET_ABSENCES_BY_VIRTUAL_CLASS = 'get_absences_by_virtual_class';
export const GET_ABSENCES_BY_VIRTUAL_CLASS_SUCCESS = 'get_absences_by_virtual_class_success';
export const GET_ABSENCES_BY_VIRTUAL_CLASS_FAIL = 'get_absences_by_virtual_class_fail';

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

//SCHEDULE ACTIONS
export const GET_CLASS_SCHEDULE = "get_class_schedule";
export const GET_CLASS_SCHEDULE_SUCCESS = "get_class_schedule_success";
export const GET_CLASS_SCHEDULE_FAIL = "get_class_schedule_fail";
export const GET_CLASS_DAILY_SCHEDULE = "get_class_daily_schedule";
export const GET_CLASS_DAILY_SCHEDULE_SUCCESS = "get_class_daily_schedule_success";
export const GET_CLASS_DAILY_SCHEDULE_FAIL = "get_class_daily_schedule_fail";
export const GET_CURRENT_USER_DAILY_SCHEDULE = "get_current_user_schedule";
export const GET_CURRENT_USER_DAILY_SCHEDULE_SUCCESS = "get_current_user_schedule_success";
export const GET_CURRENT_USER_DAILY_SCHEDULE_FAIL = "get_current_user_schedule_FAIL";
export const GET_STUDENT_DAILY_SCHEDULE = "get_student_daily_schedule";
export const GET_STUDENT_DAILY_SCHEDULE_SUCCESS = "get_student_daily_schedule_success";
export const GET_STUDENT_DAILY_SCHEDULE_FAIL = "get_student_daily_schedule_fail";

//MY HOUR ACTIONS
export const UPDATE_SHI_ATTENDANCE = "update_shi_attendance";
export const UPDATE_SHI_ATTENDANCE_SUCCESS = "update_shi_attendance_success";
export const UPDATE_SHI_ATTENDANCE_FAIL = "update_shi_attendance_fail";
export const GET_SHI_INFO = "get_shi_info";
export const GET_SHI_INFO_SUCCESS = "get_shi_info_success";
export const GET_SHI_INFO_FAIL = "get_shi_info_fail";
export const TOGGLE_ADD_ITEM_FOR_SHI = 'toggle_add_item_for_shi';
export const POST_GRADES_FOR_SHI = "post_grades_for_shi";
export const POST_GRADES_FOR_SHI_SUCCESS = "post_grades_for_shi_success";
export const POST_GRADES_FOR_SHI_FAIL = "post_grades_for_shi_fail";
export const ADD_GRADE_FOR_SHI = "add_grade_for_shi";
export const ADD_GRADE_TO_ALL_FOR_SHI = "add_grade_to_all_for_shi";
export const REMOVE_GRADE_FOR_SHI = "remove_grade_for_shi";
export const UPDATE_GRADE_FOR_SHI = "update_grade_for_shi";
export const RESET_GRADES_FOR_SHI_ARRAY = "reset_grades_for_shi_array";
export const SELECT_TOPIC = 'select_topic';
export const DESELECT_TOPIC = "deselect_topic";
export const CLEAT_TOPIC_SELECTION = "clear_topic_selection";
export const TOPIC_INPUT_CHANGE = "topic_input_change";
export const POST_SELECTED_TOPICS = 'post_selected_topics';
export const POST_SELECTED_TOPICS_SUCCESS = 'post_selected_topics_success';
export const POST_SELECTED_TOPICS_FAIL = 'post_selected_topics_fail';
export const POST_FEEDBACK_FOR_SHI = 'post_feedback_for_shi';
export const POST_FEEDBACK_FOR_SHI_SUCCESS = 'post_feedback_for_shi_success';
export const POST_FEEDBACK_FOR_SHI_FAIL = 'post_feedback_for_shi_fail';
export const POST_ABSENCES_FOR_SHI = 'post_absences_for_shi';
export const POST_ABSENCES_FOR_SHI_SUCCESS = 'post_absences_for_shi_success';
export const POST_ABSENCES_FOR_SHI_FAIL = 'post_absences_for_shi_fail';


//EVENT ACTIONS
export const GET_EVENTS = "get_events";
export const GET_EVENTS_SUCCESS = "get_events_success";
export const GET_EVENTS_FAIL = "get_events_fail";
export const GET_EVENT_INVITATIONS = "get_event_invitations";
export const GET_EVENT_INVITATIONS_SUCCESS = "get_event_invitations_success";
export const GET_EVENT_INVITATIONS_FAIL = "get_event_invitations_fail";
export const GET_MY_EVENTS = "get_events";
export const GET_MY_EVENTS_SUCCESS = "get_my_events_success";
export const GET_MY_EVENTS_FAIL = "get_my_events_fail";
export const GET_SCHOOL_CALENDAR = "get_school_calendar";
export const GET_SCHOOL_CALENDAR_SUCCESS = "get_school_calendar_success";
export const GET_SCHOOL_CALENDAR_FAIL = "get_school_calendar_fail";
export const POST_INVITATION_STATUS = "post_invitation_status";
export const POST_INVITATION_STATUS_SUCCESS = "post_invitation_status_success";
export const POST_INVITATION_STATUS_FAIL = "post_invitation_status_fail";
export const GET_CHILDREN_FOR_PARENT = "get_children_for_parent";
export const GET_CHILDREN_FOR_PARENT_SUCCESS = "get_children_for_parent_success";
export const GET_CHILDREN_FOR_PARENT_FAIL = "get_children_for_parent_fail";
export const GET_EVENTS_FOR_STUDENT = "get_events_for_student";
export const GET_EVENTS_FOR_STUDENT_SUCCESS = "get_events_for_student_success";
export const GET_EVENTS_FOR_STUDENT_FAIL = "get_events_for_student_fail";
export const GET_EVENT_DETAILS = "get_event_details";
export const GET_EVENT_DETAILS_SUCCESS = "get_event_details_success";
export const GET_EVENT_DETAILS_FAIL = "get_event_details_fail";
export const CLEAR_EVENT_INVITATIONS = 'clear_event_invitations';
export const DOWNLOAD_FILE_ERROR = 'download_file_error';

//ERROR ACTIONS
export const RESET_ERROR_MESSAGE = "reset_error_message";