import {combineReducers} from "redux";
import AuthReducer from '../login/reducers/AuthReducer';
import RssReducer from '../rss/reducers/RssReducer';
import {LOGOUT_USER} from "../actions/actionTypes";
import OfferReducer from "../offers/reducers/OfferReducer";
import ProfessorReducer from "../professors/reducers/ProfessorReducer";
import StudentReducer from "../students/reducers/StudentReducer";
import CommunicationReducer from "../communication/reducers/CommunicationReducer";

const AppReducer = combineReducers({
    auth: AuthReducer,
    rss: RssReducer,
    offer: OfferReducer,
    professor: ProfessorReducer,
    student: StudentReducer,
    communication: CommunicationReducer,
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_USER) {
        state = undefined;
    }

    return AppReducer(state, action);
};

export default rootReducer;
