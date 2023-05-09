import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { productsSlice } from "./Slices/Products/productSlices";
import { categoriesSlice } from "./Slices/Categories/categoriesSlices";
import loginReducer from "./Slices/Login/LoginSlices";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products", "categories"]
};

const rootReducer = combineReducers({
  products: productsSlice.reducer,
  categories: categoriesSlice.reducer,
  login: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export default { store, persistor };
