import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./title";
import Productitems from './productitems'

const ReleatedProduct = ({ category, subcategory }) => {
  const { products } = useContext(ShopContext);
  const [releated, setreleated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productscopy = products.slice();
      productscopy = productscopy.filter((item) => category === item.category);
      productscopy = productscopy.filter(
        (item) => subcategory === item.subcategory
      );

      setreleated(productscopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        {/* Fix: pass a count or some string */}
        <Title text1={'Related Products'} text2={releated.length + " items"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {releated.map((item, index) => (
          <Productitems 
            key={index} 
            id={item._id} 
            name={item.name} 
            price={item.price} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default ReleatedProduct;
