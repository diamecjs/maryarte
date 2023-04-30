import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../Redux/Slices/Products/productAction";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import Swal            from "sweetalert2";

function EditProduct() {
    const dispatch = useDispatch();
    const { id } = useParams();


    const [productData, setProductData] = useState({
        name: "",
        image: "",
        disponible: "",
        price: "",
        category: "",
        description: "",
        quantity:"",
    });

    useEffect(() => {
        axios
            .get(`/products/${id}`)
            .then((res) => {
                console.log("Data from API:", res.data);
                setProductData(res.data);
            })
            .catch((e) => console.log(e));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedData = {
            id: id,
        };

        for (const key in productData) {
            if (typeof productData[key] === "string") {
                trimmedData[key] = productData[key].trim();
            } else {
                trimmedData[key] = productData[key];
            }
        }



        axios
            .put(`/products/${id}`, trimmedData)
            .then((res) => {
                dispatch(updateProduct(trimmedData));
                Swal.fire(
                    '¡Producto Editado!',
                    'Se ha editado correctamente.',
                    'success'
                  ).then(() => {
                    window.location.reload()
                  });
                window.location.replace("/");
            })
            .catch((e) => console.log(e));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    };


    return (
        <div>
            <NavBar />
            <div class="min-h-screen p-8 flex justify-center items-center bg-gradient-to-br from-red-200 to-indigo-600">
                <form class="w-full max-w-lg">
                    <div class="bg-teal-500 px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                        <div class="space-y-4">
                            <h1 class="text-center text-2xl font-semibold text-orange-600">Nuevo Producto</h1>
                            <div>
                                <label for="name" class="block mb-1 text-gray-600 font-semibold">Nombre</label>
                                <input type="text"
                                    value={productData.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    placeholder="Nombre" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label for="category" class="block mb-1 text-gray-600 font-semibold">Categoria</label>
                                <input
                                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                    type="text"
                                    value={productData.category}
                                    placeholder="Categoria"
                                    onChange={handleInputChange}
                                    name="category"
                                />
                               
                            </div>
                            <div>
                                <label for="description" class="block mb-1 text-gray-600 font-semibold">Descripcion</label>
                                <input type="text"
                                    value={productData.description}
                                    placeholder="Descripcion"
                                    onChange={handleInputChange}
                                    name="description" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label for="imagen" class="block mb-1 text-gray-600 font-semibold">Imagen</label>
                                <input
                                    type="text"
                                    value={productData.image}
                                    placeholder="Imagen"
                                    onChange={handleInputChange}
                                    name="image"
                                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                />
                      
                            </div>
                            <div>
                                <label for="disponible" class="block mb-1 text-gray-600 font-semibold">Disponibilidad</label>
                                <input
                                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                    type="text"
                                    value={productData.disponible}
                                    placeholder="Disponibilidad"
                                    onChange={handleInputChange}
                                    name="disponible"
                                />
                               
                            </div>
                            <div>
                                <label for="price" class="block mb-1 text-gray-600 font-semibold">Precio $</label>
                                <input type="number"
                                    value={productData.price}
                                    onChange={handleInputChange}
                                    name="price"
                                    placeholder="Precio" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label for="quantity" class="block mb-1 text-gray-600 font-semibold">Precio $</label>
                                <input type="number"
                                    value={productData.quantity}
                                    onChange={handleInputChange}
                                    name="quantity"
                                    placeholder="Cantidad" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                        </div>
                        <button type="submit"
                            onClick={handleSubmit} class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"> Editar Producto</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;