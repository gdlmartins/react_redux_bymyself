import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "../counter/couterSlice";


export const store = configureStore({
    reducer:{
        counter: couterReducer,
    },
})


console.log(store.dispatch);
console.log(store);