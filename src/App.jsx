import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
