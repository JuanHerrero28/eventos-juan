import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
     <Navbar />
     <ItemListContainer greeting= "¡Proximos Eventos!" />
    </div>
    
  );
}

export default App;
