import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    products : []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {productId , quantity} = action.payload;
            const indexProductId = (state.products).findIndex(product => product.productId === productId);
            if (indexProductId >= 0){
                state.products[indexProductId].quantity += quantity;
            }else{
                state.products.push({productId, quantity});
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;