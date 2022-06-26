import ItemCount from './ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
      <div className='ItemListContainer'>
          <h2> {greeting} </h2>
          <ItemCount stock = {6}  />
      </div>
    );
  }
  
  export default ItemListContainer;