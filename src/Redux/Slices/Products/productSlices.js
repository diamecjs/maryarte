import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },

    reducers: {
        getAllProducts: (state, action) => {
            state.products = action.payload;
        },
        getProductById:(state,action) =>{
            state.products= action.payload;
        },
   
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
      
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
      
        changeProduct: (state, action) => {
            const updatedProduct = action.payload;
            for (let i in state.products) {
              if (state.products[i].id === updatedProduct.id) {
                state.products[i] = updatedProduct;
                break;
              }
            }
          }
    }
});

export const { getAllProducts, getProductById, addProduct, deleteProduct, changeProduct, updateProduct } = productsSlice.actions;

export default productsSlice.reducer;