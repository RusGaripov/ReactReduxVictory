import {combineReducers} from "redux";
import dataReducer from "./dataReducer"


const rootReducer=combineReducers({dataReducer})
export default rootReducer;
export type RootState=ReturnType<typeof rootReducer>;