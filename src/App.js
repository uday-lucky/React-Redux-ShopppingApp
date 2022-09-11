import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import TopNavbar from "./Components/navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/home";
import Cart from "./Components/cart";
import { store } from "./Redux/Store/store";
function App() {

  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (e) {
      // Ignore write errors;
    }
  };
  store.subscribe(() => {
    saveState(store.getState());
  });
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
