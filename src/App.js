import React from 'react';



import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { ItemListContainer } from './Components/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer';
import { ItemDetail } from './Components/ItemDetail';

export default function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'¡Proximos Eventos!'} />} />
        <Route
          path="/category/:catId"
          element={<ItemListContainer greeting={'¡Eventos por Genero!'} />}
        />
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/cart" />
      </Routes>
    </BrowserRouter>
  );
}