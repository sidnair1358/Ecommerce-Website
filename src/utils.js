import { useState, useContext, createContext } from "react";

const shoppingCartContext = createContext();

export function ProvideContext({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const setPrice = (changeType, currentItemPrice, productPrice, quantity) => {
    let totalPrice = currentItemPrice.slice(1);
    const itemPrice = parseFloat(productPrice.slice(1)) / quantity;
    if (changeType === "increase")
      totalPrice = parseFloat(totalPrice) + itemPrice;
    if (changeType === "decrease")
      totalPrice = parseFloat(totalPrice) - itemPrice;
    return `£${totalPrice}`;
  };

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
            return {
              ...item,
              quantity: item.quantity + 1,
              price: setPrice(
                "increase",
                item.price,
                product.price,
                item.quantity
              ),
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  function decreaseCartQuantity(product) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === product.id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== product.id);
      } else {
        return currItems.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price: setPrice(
                "decrease",
                item.price,
                product.price,
                item.quantity
              ),
            };
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
