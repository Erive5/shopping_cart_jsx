import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    products : [],
    statusTab : false
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
        },
        changeQuantity(state, action){
            const {productId , quantity} = action.payload;
            const indexProductId = (state.products).findIndex(product => product.productId === productId);
            if(quantity > 0){
                state.products[indexProductId].quantity = quantity;
            } else {
                // delete state.products[indexProductId];
                state.products = (state.products).filter( product => product.productId !== productId);

            }
        },
        toggleStatusTab (state) {
            if(state.statusTab === false){
                state.statusTab = true;
            }
            else {
                state.statusTab = false;
            }
        }
    }
})

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;