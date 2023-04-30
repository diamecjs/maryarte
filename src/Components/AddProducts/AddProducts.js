import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Slices/Categories/categoriesAction";
import { postProduct } from "../../Redux/Slices/Products/productAction";
import NavBar from "../NavBar/NavBar";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


export const AddProducts = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        image: "",
        disponible: "Disponible",
        category: "",
        description: "",
        price: "",
        quantity: "",
    });

    const { register } = useForm();
    const categories = useSelector((state) => state.categories?.categories)



    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const handleUploadFile = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setInput({ ...input, image: reader.result });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    function handleSelectCategories(e) {
        setInput({
            ...input,
            category: e.target.value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        dispatch(postProduct(input));
        setInput({
            name: "",
            image: "",
            disponible: "",
            category: "",
            description: "",
            price: "",
            quantity: "",
        });
        Swal.fire(
            '¡Producto Agregado!',
            'Producto creado correctamente.',
            'success'
        )
    };

    function handleSelect(e) {
        setInput({ ...input, disponible: e.target.value });
    }
    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <NavBar />
            <div class="min-h-screen p-6 flex flex-col justify-center items-center bg-gradient-to-br from-red-200 to-indigo-600">
                <form class="w-full  max-w-xs mr-12">
                    <div class="bg-teal-500 px-5 py-8 rounded-xl w-screen shadow-md max-w-sm">
                        <div class="space-y-4">
                            <h1 class="text-center text-2xl font-semibold text-orange-600">Nuevo Producto</h1>
                            <div>
                                <label for="name" class="block mb-1 text-gray-600 font-semibold">Nombre</label>
                                <input type="text" id="Name"
                                    name="name"
                                    value={input.name}
                                    placeholder="Nombre"
                                    onChange={handleChange} class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label for="category" class="block mb-1 text-gray-600 font-semibold">Categoria</label>
                                <select
                                    className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                    value={input.category}
                                    onChange={handleSelectCategories}
                                >
                                    <option disabled value="">
                                        Seleccionar categoria
                                    </option>
                                    {categories?.map((e) => (
                                        <option value={e._id} key={e.id}>
                                            {e.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label for="description" class="block mb-1 text-gray-600 font-semibold">Descripcion</label>
                                <input type="textarea" id="description"
                                    name="description"
                                    value={input.description}
                                    placeholder="Descripción"
                                    onChange={handleChange}
                                    maxlength="70" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label for="imagen" class="block mb-1 text-gray-600 font-semibold">Imagen</label>
                                <input
                                    type="file"
                                    id="image"
                                    {...register("image", { required: "Este campo es requerido" })}
                                    accept=".jpg,.png,.jpeg"
                                    onChange={handleUploadFile}
                                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                />
                                <img id="preview-image" alt="Vista previa de imagen" src={input.image} />
                            </div>
                            <div>
                                <label for="disponible" class="block mb-1 text-gray-600 font-semibold">Disponibilidad</label>
                                <select
                                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                                    onChange={handleSelect}
                                    value={input.disponible}
                                >
                                    <option>Disponible</option>
                                    <option>No Disponible</option>
                                </select>
                            </div>
                            <div>
                                <label for="price" class="block mb-1 text-gray-600 font-semibold">Precio $</label>
                                <input type="text" id="Price"
                                    name="price"
                                    value={input.price}
                                    onChange={handleChange}
                                    placeholder="Precio" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label for="quantity" class="block mb-1 text-gray-600 font-semibold">Cantidad</label>
                                <input type="number" id="quantity"
                                    name="quantity"
                                    value={input.quantity}
                                    placeholder="Cantidad"
                                    onChange={handleChange}
                                    min={1}
                                    max={5} class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                        </div>
                        <button onClick={handleSubmit} type="submit" class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"> Crear Producto</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;