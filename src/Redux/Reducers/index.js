import { combineReducers } from "redux";
import { productreducer } from "./productReducer";




export const allReducers = combineReducers({proReducer:productreducer});
