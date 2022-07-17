import { NavBar } from "./Components/Navbar/NavBar";
import  ItemListContainer  from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from "./Components/CartContext/CartContex";
import React from "react";


function App() {
    return (
     <>
     <BrowserRouter>  
     <CartProvider>
     <NavBar />
     <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
     </Routes>
     </CartProvider>
     </BrowserRouter>
     </>
    );
}

export default App;