import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/CartContext";
 
function App() {

  return (
    <>
    <Header />
    <CartContextProvider>
    <Meals />
    </CartContextProvider>
    
    </>
  );
}

export default App;
