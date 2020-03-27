import {
    NAVIGATE_PROFESSOR_HOME, NAVIGATE_STUDENT_HOME, NAVIGATE_OFFER_DETAIL,
    OPEN_SPLASH, NAVIGATE_CREATE_OFFER, NAVIGATE_ALL_STUDENTS, NAVIGATE_TIMELINE_ITEM_DETAIL, NAVIGATE_LOGIN,
    NAVIGATE_HOME, NAVIGATE_CREATE_PROFESSOR, NAVIGATE_CREATE_STUDENT, NAVIGATE_FILTER_OFFERS,
    NAVIGATE_STUDENT_OFFER_DETAIL, NAVIGATE_CREATE_MESSAGE_THREAD, NAVIGATE_MESSAGES, NAVIGATE_CHOOSE_PARTICIPANTS,
    NAVIGATE_THREAD_DETAILS, NAVIGATE_CREATE_RSS_ITEM, NAVIGATE_CREATE_MULTIPLE_STUDENTS, NAVIGATE_OFFER_MESSAGES,
    NAVIGATE_STUDENT_PROFILE
} from './actionTypes';
import { StackActions, NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

export function navigateUsingAction(action) {
    _navigator.dispatch(action);
}

export const navigateHome = () => {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: NAVIGATE_HOME})],
    });
    _navigator.dispatch(resetAction);
};

export const navigateOfferDetail = (offer) => {
    navigate(NAVIGATE_OFFER_DETAIL, offer);
};

export const navigateCreateOffer = () => {
    navigate(NAVIGATE_CREATE_OFFER);
};

export const navigateAllStudents = (offerId) => {
    navigate(NAVIGATE_ALL_STUDENTS, {
        offerId: offerId
    });
};

export const navigateTimelineItemDetail = (itemTitle) => {
    navigate(NAVIGATE_TIMELINE_ITEM_DETAIL, {itemTitle});
};

export const navigateLogin = () => {
    navigate(NAVIGATE_LOGIN, null);
};

export const navigateCreateProfessor = () => {
    navigate(NAVIGATE_CREATE_PROFESSOR);
};

export const navigateCreateStudent = () => {
    navigate(NAVIGATE_CREATE_STUDENT);
};

export const navigateCreateMultipleStudents = () => {
    navigate(NAVIGATE_CREATE_MULTIPLE_STUDENTS);
};

export const navigateFilterOffers = () => {
    navigate(NAVIGATE_FILTER_OFFERS);
};

export const navigateStudentOfferDetail = (offer) => {
    navigate(NAVIGATE_STUDENT_OFFER_DETAIL, offer);
};

export const navigateNewThread = () => {
    navigate(NAVIGATE_CREATE_MESSAGE_THREAD);
};

export const navigateMessagesList = (threadId, subject) => {
    navigate(NAVIGATE_MESSAGES, {threadId, subject});
};

export const navigateOfferMessagesList = (offer) => {
    navigate(NAVIGATE_OFFER_MESSAGES, {offer});
};

export const navigateStudentProfile = (user) => {
    navigate(NAVIGATE_STUDENT_PROFILE, {user});
};

export const navigateChooseParticipantsScreen = () => {
    navigate(NAVIGATE_CHOOSE_PARTICIPANTS, null);
};

export const navigateThreadDetails = (threadId, subject) => {
    navigate(NAVIGATE_THREAD_DETAILS, {threadId, subject});
};

export const navigateCreateRssItem = () => {
    navigate(NAVIGATE_CREATE_RSS_ITEM, null);
};

export default {
    navigate,
    setTopLevelNavigator,
};

