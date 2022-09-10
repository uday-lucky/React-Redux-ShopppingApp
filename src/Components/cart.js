import React, { useState } from "react";
import { useSelector } from "react-redux";
import {store} from "../Redux/Store/store"
const Cart = () => {

// const info=  store.getState();
const storeData = useSelector((state) => state.proReducer);
console.log("in cart",storeData);
  return storeData.cartInfo.map((item) => (
    <div className="row">
      <div className="col-md-6">{item.title}</div>
      <div className="col-md-6">{item.price}</div>
    </div>
  ));
};

export default Cart;
