import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';


//adding the slice to the store 
const appStore = configureStore({
    reducer: {
        cart:cartReducer,
    }

});

export default appStore;