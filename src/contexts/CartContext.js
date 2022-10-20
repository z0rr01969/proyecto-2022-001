import { createContext, useState, useContext } from "react";

const defaultState = { quantity: 0 };
const CartContext = createContext(defaultState);

export const CartContextStore = (props) => {

    const [cart, setCart] = useState(defaultState);
    const addItemToCart = (idProduct) => {

        //esto NO se hace
        //cart.quantity = cart.quantity + 1;
        //setcart (cart)
        //suma de elementos seleccionados
        setCart((prevState) => ({
            ...prevState,
            quantity: prevState.quantity + 1,
        }));
    }

    return (
        <CartContext.Provider value={{ cart, addItemToCart }}>
            {/*esta linea trae lo que ya estaba en la pagina*/}
            {props.children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);