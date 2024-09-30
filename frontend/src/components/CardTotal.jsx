import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./title";

const CardTotal = () => {
  const { currency, dilivery_fee, getCartAmount } = useContext(ShopContext); // Fixed typo here

  const cartAmount = getCartAmount() || 0; // Add fallback for NaN
  const shippingFee = dilivery_fee || 0;   // Add fallback for NaN

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>SubTotal</p>
          <p>
            {currency}
            {cartAmount}.00
          </p>
        </div>
        <hr className="" />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {shippingFee}.00
          </p>
        </div>
        <hr className="" />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency} {cartAmount === 0 ? 0 : cartAmount + shippingFee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CardTotal;
