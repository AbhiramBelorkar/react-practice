import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    items:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action)=>{
            // state.value+=1;
            state.items.push(action.payload)
            console.log(action.payload);
            
        },
        removeFromCart: (state) => {
            state.value>0? state.value-=1 : null;
        },
        clearCart: (state) => {
            state.value = 0;
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions
export default cartSlice.reducer;