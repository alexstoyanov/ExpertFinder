import {
    GET_THREADS,
    GET_THREADS_FAIL,
    GET_THREADS_SUCCESS,
    GET_MESSAGES,
    GET_MESSAGES_FAIL,
    GET_MESSAGES_SUCCESS,
    SET_SELECTED_MESSAGE_THREAD,
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAIL,
    FIND_PARTICIPANTS,
    SELECT_PARTICIPANT,
    CLEAR_CREATE_MESSAGE_THREAD,
    DELETE_SELECTED_PARTICIPANT,
    SEND_MESSAGE_THREAD,
    SEND_MESSAGE_THREAD_SUCCESS,
    SEND_MESSAGE_THREAD_FAIL,
    MESSAGE_BODY_CHANGED,
    SUBJECT_CHANGED,
    SEND_MESSAGE_THREAD_READ,
    SEND_MESSAGE_THREAD_READ_FAIL,
    SEND_MESSAGE_THREAD_READ_SUCCESS,
    SET_SHOULD_UPDATE_THREADS, GET_PARTICIPANTS, GET_PARTICIPANTS_SUCCESS, GET_PARTICIPANTS_FAIL,
    TOGGLE_MUTE_NOTIFICATIONS, TOGGLE_MUTE_NOTIFICATIONS_SUCCESS, QUERY_THREADS, TOGGLE_FORBID_RESPONSE,
    TOGGLE_HIDE_PARTICIPANTS, TOGGLE_HIDE_PARTICIPANTS_SUCCESS, TOGGLE_FORBID_RESPONSE_SUCCESS,
    RESET_NEW_MESSAGE_THREAD, SET_MESSAGE_THREADS
} from "../../actions/actionTypes";
import update from 'immutability-helper';

const INITIAL_STATE = {
    messageThreads: [],
    messages: [],
    selectedMessageThread: {},
    loading: false,
    error: '',
    participantsQuery: '',
    selectedParticipants: [],
    subject: '',
    messageBody: '',
    messageThreadRead: -1,
    shouldUpdateThreads: false,
    participants: [],
    currentUserId: -1,
    messageThreadInfo: {},
    newMessageThread: {},
    refreshingThreads: false,
    threadsQuery: '',
    areParticipantsHidden: false,
    areResponsesForbidden: false,
    fetchMoreThreads: true,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_THREADS:
            return {
                ...state,
                error: '',
                loading: true,
                shouldUpdateThreads: false,
                currentUserId: action.payload.currentUserId,
                newMessageThread: {},
                messageThreads: action.payload.resetThreads ? [] : action.payload.threads
            };
        case GET_THREADS_SUCCESS:
            let fetchMoreThreads = true;
            if (action.payload.length < 10) {
                fetchMoreThreads = false;
            }
            let threads = update(state.messageThreads, {$push: action.payload});
            return {
                ...state,
                messageThreads: threads,
                loading: false,
                refreshingThreads: false,
                fetchMoreThreads: fetchMoreThreads
            };
        case GET_THREADS_FAIL:
            return {...state, INITIAL_STATE, loading: false, refreshingThreads: false};
        case GET_MESSAGES:
            let threadIndex = state.messageThreads.findIndex(x => x.id === action.payload);
            if (state.messageThreads[threadIndex]) {
                return update(state, {
                    messageThreads: {
                        [threadIndex]: {
                            is_unread: {$set: 0},
                        }
                    },
                    messages: {$set: []},
                    newMessageThread: {},
                });
            } else {
                return {...state};
            }
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: prepMessagesForUI(action.payload.messages.reverse()),
                messageThreadInfo: action.payload,
                threadSubject: action.payload.subject,
                isThreadMuted: action.payload.is_muted && (action.payload.is_muted.toString() === "1"),
                areResponsesForbidden: action.payload.stopped_at ? true : false,
                areParticipantsHidden: action.payload.hid_users_at ? true : false
            };
        case GET_MESSAGES_FAIL:
            return {...state, INITIAL_STATE};
        case GET_PARTICIPANTS:
            return {...state, error: '', loading: true};
        case GET_PARTICIPANTS_SUCCESS:
            return {
                ...state,
                participants: action.payload,
                loading: false,
            };
        case GET_PARTICIPANTS_FAIL:
            return {...state, INITIAL_STATE, loading: false};
        case SET_SELECTED_MESSAGE_THREAD:
            return {
                ...state,
                selectedMessageThread: action.payload,
            };
        case SEND_MESSAGE:
            return {...state, error: ''};
        case SEND_MESSAGE_FAIL:
            return {...state, INITIAL_STATE};
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: [prepMessagesForUI([action.payload])[0], ...state.messages],
            };
        case FIND_PARTICIPANTS:
            return {
                ...state,
                participantsQuery: action.payload,
            };
        case SELECT_PARTICIPANT:
            if (state.selectedParticipants.indexOf(action.payload) === -1) {
                return {
                    ...state,
                    selectedParticipants: [...state.selectedParticipants, action.payload],
                    participantsQuery: ''
                };
            } else {
                return {
                    ...state,
                    selectedParticipants: [...state.selectedParticipants],
                    participantsQuery: ''
                };
            }
        case CLEAR_CREATE_MESSAGE_THREAD:
            return {
                ...state,
                selectedParticipants: [],
                participantsQuery: '',
            };
        case DELETE_SELECTED_PARTICIPANT:
            //NEVER USE Array#splice it is mutating the state.
            return {
                ...state,
                selectedParticipants: [
                    ...state.selectedParticipants.slice(0, action.payload),
                    ...state.selectedParticipants.slice(action.payload + 1)
                ],
            };
        case SEND_MESSAGE_THREAD:

            return {
                ...state,
                messageThreads: action.payload,
                error: '',
                subject: '',
                newMessageThread: {},
                messageBody: '',
                loading: true
            };
        case SEND_MESSAGE_THREAD_FAIL:
            return {
                ...state, error: action.error,
                INITIAL_STATE, loading: false
            };
        case SEND_MESSAGE_THREAD_SUCCESS:
            return {
                ...state,
                messageThreads: [action.payload[0], ...state.messageThreads],
                newMessageThread: action.payload[0],
                loading: false,
                subject: '',
                selectedParticipants: [],
                participantsQuery: '',
                messageBody: '',
                shouldUpdateThreads: true
            };
        case SUBJECT_CHANGED:
            return {...state, subject: action.payload};
        case MESSAGE_BODY_CHANGED:
            return {...state, messageBody: action.payload};
        case SEND_MESSAGE_THREAD_READ:
            let updatedThread = state.messageThreads[action.payload.index];
            updatedThread.has_new = action.payload.hasNew;
            updatedThread.is_unread = action.payload.is_unread;
            return update(state, {
                messageThreads: {
                    $splice: [[action.payload.index, 1, updatedThread]]
                }
            });
        case SEND_MESSAGE_THREAD_READ_FAIL:
            return {...state, INITIAL_STATE, loading: false};
        case SEND_MESSAGE_THREAD_READ_SUCCESS:
            return {
                ...state,
                messageThreadRead: action.payload
            };
        case SET_SHOULD_UPDATE_THREADS:
            return {
                ...state,
                shouldUpdateThreads: action.payload
            };
        case TOGGLE_MUTE_NOTIFICATIONS: {
            return {
                ...state,
                isThreadMuted: action.payload
            };
        }
        case QUERY_THREADS:
            return {
                ...state,
                threadsQuery: action.payload,
            };
        case TOGGLE_HIDE_PARTICIPANTS:
            return {
                ...state,
                areParticipantsHidden: action.payload,
            };
        case TOGGLE_HIDE_PARTICIPANTS_SUCCESS:
            return update(state, {
                    messageThreadInfo: {hid_users_at: {$set: action.payload.hid_users_at}}
                }
            );
        case TOGGLE_FORBID_RESPONSE:
            return {
                ...state,
                areResponsesForbidden: action.payload,
            };
        case TOGGLE_FORBID_RESPONSE_SUCCESS:
            return update(state, {
                    messageThreadInfo: {stopped_at: {$set: action.payload.stopped_at}}
                }
            );
        case RESET_NEW_MESSAGE_THREAD:
            return {
                ...state,
                newMessageThread: {}
            };
        case SET_MESSAGE_THREADS:
            return {
                ...state,
                messageThreads: action.payload
            };
        default:
            return state;
    }
};