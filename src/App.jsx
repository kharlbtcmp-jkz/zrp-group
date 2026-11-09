import { useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Items from "./pages/Items.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Checkout from "./pages/Checkout.jsx";
import Form from "./pages/Form.jsx";
import OrderSummary from "./pages/OrderSummary.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";

function App() {

  const [cart, setCart] = useState([]);

  function addToCart(product, quantity) {
    const found = cart.find((item) => item.id === product.id);
    if (found) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <Routes>
      <Route path="/" element={<Header cartCount={cart.length} />}>
        <Route index element={<Home />} />
        <Route path="items" element={<Items />} />
        <Route path="items/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route
          path="checkout"
          element={<Checkout cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="form" element={<Form cart={cart} clearCart={clearCart} />} />
        <Route path="summary" element={<OrderSummary />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
