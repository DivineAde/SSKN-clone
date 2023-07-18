import React, { useContext, createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [shopItems, setShopItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart`);
  } 

  const deleteCartItem = (product) => {
    const deletedItem = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
  
    setCartItems(newCartItems);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - (deletedItem.price * deletedItem.quantity));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - deletedItem.quantity);

    toast.success(`${product.name} removed`);
  };
  

  
  const shopAllItems = (id, value) => {
    const shopFoundProduct = shopItems.find((item) => item._id === id);
    if (!shopFoundProduct) {
      // Handle the case where the product is not found
      console.error(`Product with ID ${id} not found.`);
      return;
    }
  
    const shopIndex = shopItems.findIndex((product) => product._id === id);
    const shopNewCartItems = [...shopItems];
  
    if (value === 'add') {
      shopNewCartItems[shopIndex] = { ...shopFoundProduct, quantity: shopFoundProduct.quantity + 1 };
      setShopItems(shopNewCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + shopFoundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === 'remove') {
      if (shopFoundProduct.quantity > 1) {
        shopNewCartItems[shopIndex] = { ...shopFoundProduct, quantity: shopFoundProduct.quantity - 1 };
        setShopItems(shopNewCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - shopFoundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };
  

  const toggleCartItemQuantity = (id, value) => {
    const foundProduct = cartItems.find((item) => item._id === id);
    const index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = [...cartItems];
  
    if (value === 'inc') {
      newCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity + 1 };
      setCartItems(newCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        newCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity - 1 };
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };
  

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{ showCart, cartItems, totalPrice, totalQuantities, qty, incQty, decQty, onAdd, setShowCart, toggleCartItemQuantity, deleteCartItem, shopAllItems }}
    >
      {children}
    </Context.Provider>
  );
};


export const useStateContext = () => useContext(Context);