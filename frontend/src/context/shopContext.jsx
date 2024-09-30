import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import product from "../pages/product";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const dilivery_fee = 10;
  const [search, setsearch] = useState("");
  const [showsearch, setshowsearch] = useState(false);
  const [cartItems, setcartItems] = useState({});
  const navigate=useNavigate()

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("select product size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setcartItems(cartData);
  };

  const getcartcount = () => {
    let totalcount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalcount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalcount;
  };

  // useEffect(()=>{
  //     console.log(cartItems)
  // },[cartItems])

  const updatequantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setcartItems(cartData);
  };

  const getCartAmount = () => {
    let totalcount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalcount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalcount;
  };

  const value = {
    products,
    currency,
    dilivery_fee,
    search,
    setsearch,
    showsearch,
    setshowsearch,
    cartItems,
    addToCart,
    getcartcount,
    updatequantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
