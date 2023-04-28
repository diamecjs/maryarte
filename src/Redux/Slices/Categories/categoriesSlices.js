import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],  // inicializamos la propiedad categories con un array vacío
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        getAllCategories: (state, action) => {
            state.categories = action.payload; // actualizamos la propiedad categories con los datos recibidos del servidor
        },
    },
});

export const { getAllCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;