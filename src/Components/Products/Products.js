import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { Delete, updateProduct } from "../../Redux/Slices/Products/productAction";
import { CartContext } from "../Cart/cartContext";
import Swal from "sweetalert2";

const Products = ({ id, name, image, disponible, category, description, price }) => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDelete = (id) => {
    dispatch(Delete(id));
    Swal.fire("¡Borrado!", "El curso ha sido borrado.", "success").then(() => {
      window.location.reload();
    });
  };

  const handleEdit = () => {
    const productData = {
      id,
      name,
      image,
      disponible,
      category,
      description,
      price,
    };
    dispatch(updateProduct(productData));
    window.location.replace(`/editProducts/${id}`);
  };

  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        const product = { id, quantity: 1, price, name, image };
        return [...currItems, product];
      }
    });
  };

  const removeProduct = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerProduct = getQuantityById(id);



  return (
    <div class="max-w-2xl mx-auto">
      <div class="shadow-md rounded-lg max-w-xs bg-orange-500 border-2 border-teal-600">
        <a href="#">
          <img class="rounded-t-lg p-8 mx-auto my-0 w-full h-64 object-cover" src={image} alt="product image" />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{name}</h3>
          </a>
          <h3 class="text-gray-900 font-semibold text-xs tracking-tight dark:text-white">{description}</h3>
          <div class="flex items-center mt-2.5 mb-5">
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
            <div class="ml-5 flex items-center">
              {typeof isLoggedIn === "boolean" && isLoggedIn ? (
                <img
                  class="m-5"
                  src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1682526413/external-Delete-round-icons-others-inmotus-design-removebg-preview_zzrfln.png"
                  width={30}
                  onClick={() => handleDelete(id)}
                  style={{ cursor: "pointer" }}
                />
              ) : null}
              {typeof isLoggedIn === "boolean" && isLoggedIn ? (
                <img
                  src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1682526413/external-edit-user-interface-febrian-hidayat-gradient-febrian-hidayat-removebg-preview_zsj3p1.png"
                  width={30}
                  onClick={() => handleEdit(id)}
                  style={{ cursor: "pointer" }}
                />
              ) : null}
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$ {price}</span>
            {quantityPerProduct === 0 ? (
              <button onClick={() => addToCart()}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agrega al carrito
              </button>
            ) : (null)}
            {quantityPerProduct > 0 && (
              <button class="text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={() => removeProduct(id)}>
                Elimina Producto
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;