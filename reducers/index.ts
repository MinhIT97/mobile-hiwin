import { combineReducers } from "redux";
import changeBackgroundReducer from './changeBackgroundReducer';
import positionHotProduct from './positionHotProduct';
import moveProductToHot from './moveProductToHot';
import defaultProduct from './defaultProduct';


const rootReducer = combineReducers({
    changeBackgroundReducer: changeBackgroundReducer,
    positionHotProduct: positionHotProduct,
    moveProductToHot: moveProductToHot,
    defaultProduct: defaultProduct

});
export default rootReducer;