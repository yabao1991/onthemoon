import { GET_WEATHER } from "../Constants";
const WeatherInitialState = {
  loading: false,
  error: false,
  success: false,
  data: {}
};

const WeatherReducer = (state = WeatherInitialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_WEATHER.PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_WEATHER.SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload
      };
    case GET_WEATHER.REJECTED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default WeatherReducer;
