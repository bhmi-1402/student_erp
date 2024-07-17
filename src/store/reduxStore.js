import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore , persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:"persist-key",
    storage
}

const reducer = combineReducers({
    user : userSlice
})

const persistedReducer = persistReducer(persistConfig,reducer); 

const appStore = configureStore({
    reducer: persistedReducer
});

export default appStore;