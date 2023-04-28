import axios from "axios";
import {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    changeProduct,
} from "./productSlices";

export const getProducts = () => (dispatch) => {
    axios("/products")
        .then((res) => dispatch(getAllProducts(res.data.products)))
        .catch((e) => console.log(e));
};
export const getProductId = (id) => (dispatch) => {
    axios.get(`/products/${id}`)
        .then((res) => dispatch(getProductById(res.data)))
        .catch((e) => console.log(e));
};


export const postProduct = (value) => (dispatch) => {
    axios
        .post("/products", value)
        .then((res) => dispatch(addProduct(res.data.products)))
        .catch((e) => console.log(e));
};

export const Delete = (id) => (dispatch) => {
    axios
        .delete(`/products/${id}`)
        .then((res) => {
            dispatch(deleteProduct(res));
        })
        .catch((e) => console.log(e));
};

export const updateProduct = (productData) => (dispatch) => {
    console.log("productData", productData);
    axios
        .put(`/products/${productData.id}`, productData)
        .then((res) => {
            dispatch(changeProduct(res.data));
        })
        .catch((e) => console.log(e));
};