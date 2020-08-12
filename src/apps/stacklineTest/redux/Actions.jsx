import { GET_SALESDATA } from "./Constants";
// import axios from "axios";
// import { BASE_URL } from "../utils/ApiConstants";
// import { toast } from "react-toastify";
import { mockData } from "../assets/mockData/data"
import UtilFunctions from "../utils/UtilFunctions"


let mockId = "B007TIE0GQ"

export const GetSalesData = (
  id = mockId
) => async dispatch => {
  dispatch({ type: GET_SALESDATA.PENDING });
  // dispatch({ type: GET_SALESDATA.SUCCESS, payload: UtilFunctions.getFormattedData(mockData) })

  const timer = setInterval(() => {
    dispatch({ type: GET_SALESDATA.SUCCESS, payload: UtilFunctions.getFormattedData(mockData) })
    clearInterval(timer)
  }, 2000)
  
  // axios.get(BASE_URL, {
  //   params: {
  //     productId: id
  //   }
  // })
  // .then(response =>
  //   dispatch({ type: GET_SALESDATA.SUCCESS, payload: response.data })
  // )
  // .catch(err => {
  //   console.log(err.response, err);
  //   toast.error(err.response.data.message, {
  //     position: "bottom-center",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: false,
  //     draggable: false
  //   });
  //   dispatch({ type: GET_SALESDATA.REJECTED, payload: err.response });
  // });
};