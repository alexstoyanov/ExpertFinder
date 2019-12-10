import {combineReducers} from "redux";
import AuthReducer from '../login/reducers/AuthReducer';
import {LOGOUT_USER} from "../actions/actionTypes";

const AppReducer = combineReducers({
    auth: AuthReducer,
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_USER) {
        state = undefined;
    }

    return AppReducer(state, action);
};

export default rootReducer;
