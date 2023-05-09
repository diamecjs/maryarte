import React, { useContext } from "react";
import { CartContext } from "../Cart/cartContext";
import NavBar from "../NavBar/NavBar";

export const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const totalPrice = cart.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
    );

    const handleFinalize = () => {
        let message = `Hola, quisiera finalizar mi compra con los siguientes productos: \n`;

        cart.forEach((item) => {
          message += `${item.name} x${item.quantity} - $${item.price} c/u \n`;
        });
      
        const phone = "573107649291"; 
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      
        window.open(url, "_blank"); 
        setCart([]);
      
      };

    return (
        <div class="h-full bg-red-400">
            <NavBar/>
            <h1 className="mb-10 text-center text-5xl text-white font-bold">Mi carrito de compras</h1>
            <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div class="rounded-lg md:w-2/3">
                    {cart.map((item) => (
                        <div key={item.id} class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img src={item.image} alt={item.image} class="w-full rounded-lg sm:w-40" />
                            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-lg font-bold text-gray-900">{item.name}</h2>
                                </div>
                                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div class="flex items-center border-gray-100">
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <p class="text-lg font-bold text-red-700">{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <hr class="my-4" />
                    <div class="flex justify-between">
                        <p class="text-lg font-bold text-orange-500">Total</p>
                        <div class="">
                            <p class="mb-1 text-lg font-bold">${totalPrice}</p>
                            <p class="text-sm text-red-700 font-bold">IVA Incluido</p>
                        </div>
                    </div>
                    <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"  onClick={handleFinalize}>Finalizar</button>
                </div>
            </div>
        </div>

    );
};

export default Cart;
