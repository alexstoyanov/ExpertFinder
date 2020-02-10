import {
    NAVIGATE_PROFESSOR_HOME, NAVIGATE_STUDENT_HOME, NAVIGATE_OFFER_DETAIL,
    OPEN_SPLASH, NAVIGATE_CREATE_OFFER, NAVIGATE_ALL_STUDENTS, NAVIGATE_TIMELINE_ITEM_DETAIL, NAVIGATE_LOGIN,
    NAVIGATE_HOME, NAVIGATE_CREATE_PROFESSOR, NAVIGATE_CREATE_STUDENT, NAVIGATE_FILTER_OFFERS
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

export const navigateTimelineItemDetail = (item) => {
    navigate(NAVIGATE_TIMELINE_ITEM_DETAIL, item);
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

export const navigateFilterOffers = () => {
    navigate(NAVIGATE_FILTER_OFFERS);
};

export default {
    navigate,
    setTopLevelNavigator,
};

