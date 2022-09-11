import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  
  const dispatch= useDispatch();

  // const info=  store.getState();
  const storeData = useSelector((state) => state.proReducer);
  console.log("in cart", storeData);
  return(
  <div>
  {
    storeData.cartInfo.length>0?
  
   storeData.cartInfo.map((item) => (
    console.log("count data",item),
    <div className="row product" style={{margin:20}}>
      
      <div className="col-md-2">
        <img src={item.image} alt={item.title} height="50" />
      </div>
      <div className="col-md-2 cart-product-price">
        {item.itemCount}
      </div>
      <div className="col-md-2 product-detail">
        <h5>{item.title}</h5>
      </div>
      <div className="col-md-2 cart-product-count">
        <h5>{item.category}</h5>
      </div>
      <div className="col-md-2 cart-product-price">
        {item.cartPrice}
      </div>
      <div className="col-md-2">
      <button onClick={()=>dispatch({type:"DELETE",payload:item})} > delete</button>
      </div>
     
    </div> )):
    <div>no items in cart. 
    please add some items</div>
  }
</div>
  );
   
 
};

export default Cart;
