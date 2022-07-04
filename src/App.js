import './App.css';
import ItemCount from './Components/ItemCount';
import { ItemDetailCotainer } from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
     <Navbar />
     {/* <ItemListContainer greeting= "¡Proximos Eventos!" />
     <ItemCount stock = {6}  /> */}
     <ItemDetailCotainer />
    </div>
    
  );
}

export default App;
