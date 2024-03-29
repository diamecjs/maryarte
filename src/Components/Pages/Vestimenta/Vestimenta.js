import Products from "../../Products/Products";
import NavBar from "../../NavBar/NavBar"
import Footer from "../../Footer/Footer"
import React, { useEffect } from "react";
import { getProducts } from "../../../Redux/Slices/Products/productAction";
import { useDispatch, useSelector } from "react-redux";


const Vestimenta = ({ addCart }) => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);





    return(
        <div className="bg-gradient-to-b from-orange-500 via-pink-500 via-white to-purple-700">
        <NavBar />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {Object.values(products)


            .filter(product => product?.category === "Vestimenta")
            .map((el) => {

                return (
                    <div className="p-8">
                        <Products
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            image={el.image}
                            description={el.description}
                            disponible={el.disponible}
                            price={el.price}
                            addCart={addCart}
                        />
                    </div>
                );
            })}
    </div>
   <Footer />
    </div>
    )
}

export default Vestimenta;