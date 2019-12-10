import {
    NAVIGATE_HOME, NAVIGATE_OFFER_DETAIL,
    OPEN_SPLASH
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

export default {
    navigate,
    setTopLevelNavigator,
};

