import Products from "../../Products/Products";
import NavBar from "../../NavBar/NavBar"
import Footer from "../../Footer/Footer"
import React, { useEffect } from "react";
import { getProducts } from "../../../Redux/Slices/Products/productAction";
import { useDispatch, useSelector } from "react-redux";

const Accesorios = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-b from-orange-500 via-pink-500 via-white to-purple-700">
      <NavBar />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {Object.values(products)
          .filter((product) => product.category === "Accesorios")
          .map((product) => {
            return (
              <div className="p-8" key={product.id}>
                <Products
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  description={product.description}
                  disponible={product.disponible}
                  price={product.price}
                />
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Accesorios;
