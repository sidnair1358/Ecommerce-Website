import { useState, useContext, createContext } from "react";

const shoppingCartContext = createContext();

export function ProvideContext({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === product.id) == null) {
        return [
          ...prev,
          {
            id: product.id,
            quantity: 1,
            price: product.price,
            name: product.name,
            image: product.images[0].src,
            imageAlt: product.images[0].alt,
          },
        ];
      } else {
        return prev.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  function decreaseCartQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    decreaseCartQuantity,
  };

  return (
    <shoppingCartContext.Provider value={contextValue}>
      {children}
    </shoppingCartContext.Provider>
  );
}

export const shopContext = () => {
  return useContext(shoppingCartContext);
};
