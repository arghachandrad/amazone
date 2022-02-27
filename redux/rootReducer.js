import { combineReducers } from "redux"
import { globalReducer } from "./global/reducer"

export const rootReducer = combineReducers({ global: globalReducer })
