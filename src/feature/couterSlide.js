import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const counterSlice = createSlice ({
    name:"counter",
    initialState,
    reducers:{
        increase: ((state) => {state.value +=  1}),
        decrease: ((state) => {state.value -=1}) ,
        increaseby: ((state, action)=>{
            state.value += action.payload
        }),
        decreaseby: ((state, action)=> {
            state.value -=action.payload;
        })
    }
})
export const actions = counterSlice.actions; 

export default counterSlice.reducer;