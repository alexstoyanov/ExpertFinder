import {combineReducers} from "redux";
import AuthReducer from '../login/reducers/AuthReducer';
import RssReducer from '../rss/reducers/RssReducer';
import {LOGOUT_USER} from "../actions/actionTypes";
import OfferReducer from "../offers/reducers/OfferReducer";

const AppReducer = combineReducers({
    auth: AuthReducer,
    rss: RssReducer,
    offer: OfferReducer,
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_USER) {
        state = undefined;
    }

    return AppReducer(state, action);
};

export default rootReducer;
