import loadingreducer from "./Reducers";
import {configureStore} from "@reduxjs/toolkit"

const Store=configureStore({
    reducer:{
        alerts:loadingreducer
    }
})
export default Store;
