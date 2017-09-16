import { combineReducers } from 'redux';
import uiFrameReducer from './UIFrameReducer';


const rootReducer = combineReducers({
    uiFrameReducer: uiFrameReducer
});

export default rootReducer;

