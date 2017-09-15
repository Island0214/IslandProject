import { combineReducers } from 'redux';
import uiFrameReducer from './UIFrameReducer';


const rootReducer = combineReducers({
    appleBasket: uiFrameReducer
});

export default rootReducer;

