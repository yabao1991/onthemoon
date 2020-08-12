import { combineReducers } from "redux";
import WeatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
    weatherData: WeatherReducer,
});

export default rootReducer;