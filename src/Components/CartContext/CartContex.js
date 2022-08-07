import React, {useState, useContext} from "react";


const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

   /*  const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({...item, quantity: newQuantity});
        setCart(newCart)
    } */

    // Con esta funcion agregamos productos al carrito de la siguiente manera,  si el producto no se encuentra en el carrito, en el else setamos un array nuevo, con todos los obejtos que ya estaban antes y creamos un nuevos objeto que va a tener todos los campos que tenia el item con la cantidad y si el producto se encuentra en el carrito creamos un nuevo array utilizando el metodo map aunmentando la cantidad por el nuevo valor.
    const addProduct = (item, quantity) => {
        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            } ));
        } else {
            setCart([...cart, {...item, quantity}]);
        }
    }

// con esta funcion borramos todos los productos que se encuentran en el carrito seteandolo con un array vacio
    const clearCart = () => setCart([]);

// con esta funcion aplicando el metodo find para saber si un producto se encuentra en el carrito delvolviendonos el objeto o undifined
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    // con esta funcion removemos el producto del carrito pasando el id del producto y su vez setamos el carrrito y aplicamos el metodo filter dejando pasar todos los productos que no tengan el id del producto que queremos eliminar formando un nuevo array de todos los prodcutos que no tienen ese id
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);





    return(

    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </CartContext.Provider>

    )
}
export default CartProvider

