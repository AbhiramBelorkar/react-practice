import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products', async () => {
    const response = await fetch('https://dummyjson.com/products')
    const jsonResponse = await response.json();    
    return jsonResponse.products;
})

const initialState = {
    items: [],
    status: undefined,
    error: null
}

const productSlice = createSlice({
    name: 'productList',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'success',
            state.items = action.payload
        })
    }
})

export default productSlice.reducer;
