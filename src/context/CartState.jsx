import React, { useReducer, useState } from "react";
import CartReducer from "./CartReducer";
import CartContext from "./CartContext";
import { sumItems } from "./CartReducer";

const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

  const CartState = ({ children }) => {
    const [orderStatus, setOrderStatus] = useState(false)

    const initialState = {
      cartItems: storage,
      user: null,
    };
    const [state, dispatch] = useReducer(CartReducer, initialState);
  
    const addToCart = (payload) => {
      dispatch({ type: "ADD_TO_CART", payload });
    };
  
    const increase = (payload) => {
      dispatch({ type: "INCREASE", payload });
    };
  
    const decrease = (payload) => {
      dispatch({ type: "DECREASE", payload });
    };
  
    const removeFromCart = (payload) => {
      dispatch({ type: "REMOVE_ITEM", payload });
    };
  
    const clearCart = () => {
      dispatch({ type: "CLEAR" });
    };
  
    const handleCheckout = () => {
      dispatch({ type: "CHECKOUT" });
    };
  
    return (
      <CartContext.Provider
        value={{
          cartItems: state.cartItems,
          checkout: state.checkout,
          user: state.user,
          addToCart,
          removeFromCart,
          increase,
          decrease,
          handleCheckout,
          clearCart,
          ...sumItems(state.cartItems),
          orderStatus,
          setOrderStatus,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
export default CartState;
