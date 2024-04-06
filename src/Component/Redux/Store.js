import setUser from "./Reducer2";
import loadingreducer from "./Reducers";
import {configureStore} from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer=combineReducers({
    alerts:loadingreducer,
    user:setUser
})

const Store=configureStore({
    reducer:rootReducer
})
export default Store;
