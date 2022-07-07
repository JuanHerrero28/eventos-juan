import './App.css';
import ItemCount from './Components/ItemCount';
import { ItemDetailCotainer } from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path="/" element={<ItemListContainer greeting= "¡Proximos Eventos!" />} />
       <Route path="/category/:idcategoria" element={<ItemListContainer greeting= "Eventos por Genero" />} />
       <Route path="/Item" element={<ItemDetailCotainer />} />
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;
