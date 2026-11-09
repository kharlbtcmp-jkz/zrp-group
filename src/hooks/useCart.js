import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);

  function addToCart(product, quantity) {
    setCart((currentCart) => {
      const found = currentCart.find((item) => item.id === product.id);

      if (found) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentCart, { ...product, quantity }];
    });
  }

  function removeFromCart(id) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return { cart, addToCart, removeFromCart, clearCart };
}
