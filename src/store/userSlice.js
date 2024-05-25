import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name : "user",
    initialState : {name : "Bhoomi"},
    reducers : {
        addUser : (state,action)=>{
            state.user = action.payload;
        },
        removeUser : (state,action)=>{
            state = {};
        },
        changeName : (state,action)=>{
            state.name = action.payload;
        }
    }
});

export const {addUser,removeUser,changeName} = userSlice.actions;
export default userSlice.reducer;