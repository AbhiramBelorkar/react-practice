import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    items: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action)=>{
            // state.value+=1;
            state.items.push(action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state.items));
            
        },
        removeFromCart: (state, action) => {
            // state.value>0? state.value-=1 : null;
            const cartData = state.items.filter((item) => item.id != action.payload.id)
            state.items = cartData;
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        clearCart: (state) => {
            // state.value = 0;
            state.items = []
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions
export default cartSlice.reducer;