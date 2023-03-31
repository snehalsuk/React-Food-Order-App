import { useState } from "react";
import "./App.css";

import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Header from "./components/layout/Header";
function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}

    <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
    <main>
      <Meals />
    </main>
  </CartProvider>
  );
}

export default App;
