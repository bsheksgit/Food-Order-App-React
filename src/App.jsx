import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart"
import CartContextProvider from "./store/CartContext";
 
function App() {

  return (
    <>
    <CartContextProvider>
    <Header />
    <Meals />
    <Cart />
    </CartContextProvider>
    </>
  );
}

export default App;
