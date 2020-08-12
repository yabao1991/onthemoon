import { combineReducers } from "redux";
import SalesReducer from "./salesReducer";

const rootReducer = combineReducers({
    salesData: SalesReducer,
});

export default rootReducer;