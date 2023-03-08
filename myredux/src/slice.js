import {createSlice} from "@reduxjs/toolkit";

const Slice=createSlice({
    name:"sample",
    initialState:{
        products: [],
        isAuthenticate: false
    },
    reducers: {
        login:(state, action) =>{
            state.isAuthenticate=action.payload;
        },
        addToCart:(state,action)=>{
            console.log(action);
            console.log(state);
            state.products=action.payload;
         },
         updateCart: (state,action)=>{
            console.log(action);
            state.products[action.payload.index][action.payload.key]= action.payload.event;
         },
         deleteCart: (state,action) =>{
            state.products=action.payload;
        }
    }
})
export const {login,addToCart, deleteCart,updateCart}=Slice.actions;

export default Slice.reducer;