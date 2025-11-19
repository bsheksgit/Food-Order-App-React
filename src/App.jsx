import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart"
import CartContextProvider from "./store/CartContext";
import Checkout from "./components/Checkout";
 
function App() {

  return (
    <>
    <CartContextProvider>
    <Header />
    <Meals />
    <Cart />
    <Checkout/>
    </CartContextProvider>
    </>
  );
}

export default App;
