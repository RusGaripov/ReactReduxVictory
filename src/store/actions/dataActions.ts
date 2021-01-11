import * as actions from "./index"
import axios from "axios";

export const  getData = (from:any='2020-05-01',to:any='2020-05-15') =>async (dispatch:any) => {
  const res= await axios.get(`https://api.covid19tracking.narrativa.com/api/country/russia?date_from=${from}&date_to=${to}`);
      dispatch({type: actions.GET_DATA,
                period:res.data.dates})
}



