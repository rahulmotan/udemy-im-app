import {combineReducers} from "redux";
import channels from './channels'

const rootReducer = combineReducers({
    channelReducer : channels
});

export default rootReducer