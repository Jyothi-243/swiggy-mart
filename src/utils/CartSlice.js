import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //in vanilla redux (we dont have to mutate the state) older(earlier) (we dont have to mutate state)
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            //Redux toolkit
            //mutating our state here (we have to mutate)
            state.items.push(action.payload);

        },
        removeItem: (state, action) => {
            state.items.pop();

        },
        clearCart: (state, action) => {

            // when we do like this , we are not mutating/modifying the state , we are changing the reference to that. //but here we have to mutate the state .
            // state = ["pizza"]; //here state is the local variable it will modify the local variable not the actual state 
            // in the reducer function console.log() wont work , we have to do the console.log() of current state , 
            console.log("current state", current(state))
            state.items.length = 0;

        },
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer; 