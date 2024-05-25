import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { combineReducers } from "@reduxjs/toolkit";

const Allreducer = combineReducers({
    user : userSlice
})

const store = configureStore({
    reducer : Allreducer
})

export default store;