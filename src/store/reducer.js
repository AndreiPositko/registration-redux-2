import { combineReducers } from 'redux';
import auth from '../store/auth/reducer';

const rootReducer = combineReducers({
    auth,
})

export default rootReducer;
