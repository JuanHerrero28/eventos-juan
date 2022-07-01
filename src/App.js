import './App.css';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
     <Navbar />
     <ItemListContainer greeting= "¡Proximos Eventos!" />
     <ItemCount stock = {6}  />
    </div>
    
  );
}

export default App;
