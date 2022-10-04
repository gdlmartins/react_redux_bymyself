import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feature/couterSlide';


const store = configureStore({
    reducer:{
        counter: counterReducer},
})


export default store;


