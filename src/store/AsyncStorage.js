import AsyncStorage from '@react-native-community/async-storage';
import * as Constants from "../utils/Constants";

//OPERATIONS
export function getToken() {
    try {
        return AsyncStorage.getItem('@' + Constants.SHKOLO_STORE + ':' + Constants.TOKEN);
    } catch (error) {
    }
}

export function removeToken() {
    try {
        return AsyncStorage.removeItem('@' + Constants.SHKOLO_STORE + ':' + Constants.TOKEN);
    } catch (error) {
    }
}

export function saveToken(token) {
    try {
        AsyncStorage.setItem('@' + Constants.SHKOLO_STORE + ':' + Constants.TOKEN, token);
    } catch (error) {
    }
}

export function saveUserRole(userRole) {
    try {
        AsyncStorage.setItem('@' + Constants.SHKOLO_STORE + ':' + Constants.USER_ROLE, userRole.toString());
    } catch (error) {
    }
}

export function removeUserRole() {
    try {
        return AsyncStorage.removeItem('@' + Constants.SHKOLO_STORE + ':' + Constants.USER_ROLE);
    } catch (error) {
    }
}

export function getUserRole() {
    try {
        return AsyncStorage.getItem('@' + Constants.SHKOLO_STORE + ':' + Constants.USER_ROLE);
    } catch (error) {
    }
}

export function saveFcmToken(fcmToken) {
    try {
        AsyncStorage.setItem('@' + Constants.SHKOLO_STORE + ':' + Constants.FCM_TOKEN, fcmToken.toString());
    } catch (error) {
    }
}

export function getFcmToken() {
    try {
        return AsyncStorage.getItem('@' + Constants.SHKOLO_STORE + ':' + Constants.FCM_TOKEN);
    } catch (error) {
    }
}

export function saveCurrentUserId(userId) {
    try {
        AsyncStorage.setItem('@' + Constants.SHKOLO_STORE + ':' + Constants.CURRENT_USER_ID, userId.toString());
    } catch (error) {
    }
}
export function getCurrentUserId() {
    try {
        return AsyncStorage.getItem('@' + Constants.SHKOLO_STORE + ':' + Constants.CURRENT_USER_ID);
    } catch (error) {
    }
}

export function saveCurrentUserRoles(userId) {
    try {
        AsyncStorage.setItem('@' + Constants.SHKOLO_STORE + ':' + Constants.CURRENT_USER_ROLES, userId.toString());
    } catch (error) {
    }
}
export function getCurrentUserRoles() {
    try {
        return AsyncStorage.getItem('@' + Constants.SHKOLO_STORE + ':' + Constants.CURRENT_USER_ROLES);
    } catch (error) {
    }
}

export function saveCurrentUserNames(userNames) {
    try {
        AsyncStorage.setItem('@' + Constants.SHKOLO_STORE + ':' + Constants.CURRENT_USER_NAMES, userNames);
    } catch (error) {
    }
}

export function getCurrentUserNames() {
    try {
        return AsyncStorage.getItem('@' + Constants.SHKOLO_STORE + ':' + Constants.CURRENT_USER_NAMES);
    } catch (error) {
    }
}