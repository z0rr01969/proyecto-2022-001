import { CartGrid, ItemCartWrapper } from "./styles";
import { Products, PRODUCTS } from "../Products/index";
import { Page } from "../../components/Page";
import { useCart, CartContextStore } from "../../contexts/CartContext";
import { createContext, useState, useContext } from "react";
import { Button } from "../../globalStyles";
//Revisar los import


export const Checkout = () => {

    console.warn(PRODUCTS);

    const Carrito = [];
    const [searchProducts, setSearchProducts] = useState("");
    const { addItemToCart } = useCart(); //useContext(CartContext);
    const addToCartHandler = (idProduct) => {
        //alert(idProduct);
        //se agrega la variable para que añada la cantidad
        addItemToCart(idProduct);
      }
      
    return (
        <Page>
            <>
            <ItemCartWrapper>
                {
                    <Products {...PRODUCTS}
                    img={PRODUCTS.image}
                    onPress={addToCartHandler}
                    hasAction={true} />
                    
                }
            </ItemCartWrapper>
            <ItemCartWrapper>
                <h3>Imagen</h3>
                <p>Descripcion</p>
                <p>Precio</p>
            </ItemCartWrapper>
            </>
            <CartGrid>
                <h3>bonito</h3>
            </CartGrid>
        </Page>
    );
}


    //verifica que sale por consola

/*  
    const {
        isEmpty,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = PRODUCTS(props);

    if (isEmpty) return <h1 className="text-center">Carrito de Compras Vacio</h1> 
    
        return (
            <Page>
            {/*<Products key={key} {...item} onPress={addToCartHandler} hasAction={true} textAction="Agregar" /> *//*
<div className="row justify-content-center">
<table>
<tbody>
{PRODUCTS.map(({ key }, { ...PRODUCTS })=>{
return(
    <tr key={key}>
        <td>
            <img src={PRODUCTS.image} />
        </td>
        <td>{PRODUCTS.name}</td>
        <td>{PRODUCTS.price}</td>
    </tr>
)
})}
</tbody>
</table>
</div>
</Page>
);

//<Products />

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
);
}*/