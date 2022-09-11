import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ItemCard from "./card";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productreducer } from "../Redux/Reducers/productReducer";

const Home = () => {
  
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      res.data?.forEach((element) => {
        element.itemCount = 0;
        element.cartPrice = 0;
      })
      setProducts(res.data);
     // dispatch({type:"ADD",payload:res.data});
    });
  };

  const dispatch = useDispatch();
   const data = useSelector((state)=>state.proReducer);
  // console.log("store data",data);
  return (
    <div>
     { data.cartInfo.length?
      <div>{data.cartInfo.length} products added </div>: <div> your cart is empty </div>}
      <Row>
        {products.length > 0 ? (
          products.map((prod) => {
            return <ItemCard key={prod.id} products={prod} dispatch={dispatch} />;
          })
        ) : (
          <div> Loading products...</div>
        )}
      </Row>
    </div>
  );
};

export default Home;
