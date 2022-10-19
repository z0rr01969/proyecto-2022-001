import { CartGrid, ItemCartWrapper } from "./styles";
import { Products } from "../Products";
import { Page } from "../../components/Page";
import { createContext, useState, useContext } from "react";
import { useCart, CartContextStore } from "../../contexts/CartContext";
//Revisar los import


export const Checkout = (idProduct, name, Precio, PRODUCTS) => {

    //const [cart, setCart] = useState(defaultState);
    //const defaultState = { quantity: 0 };
    //const CartContext = createContext(defaultState);
    //const { addItemToCart } = useCart(); //useContext(CartContext);
    //const addToCartHandler = (idProducts) => {
    //    addItemToCart(idProducts);
    //}

    return (
              
        <Products />
 
    );

    /*
        //const { idProducts } = useParams();
        return (
        <CartGrid to={`../products/${idProducts}`}>
            <CardShopImage>
                <img src={"/products/:idShop/${idProducts}"} alt={name} />
            </CardShopImage>
            <ItemCartWrapper>
                <h3>Nombre {name}</h3>
                <p>Precio{location}</p>
            </ItemCartWrapper>
        </CartGrid>
        );*/

}

/*
export const Checkout = () => (
    <h3>Página resumen de productos</h3>
)
*/