import { GET_SALESDATA } from "../Constants";
const salesInitialState = {
  loading: false,
  error: false,
  success: false,
  data: []
};

const SalesReducer = (state = salesInitialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_SALESDATA.PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_SALESDATA.SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload
      };
    case GET_SALESDATA.REJECTED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default SalesReducer;
