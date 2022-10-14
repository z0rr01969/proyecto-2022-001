import { useParams } from "react-router-dom";
import { Page } from "../../components/Page";
import { Product } from "../../components/Product";
import { Search } from "../../components/Search";
import { ProductGrid } from "./styles";
import { useState } from "react";
//import { useContext } from "react";
import { useCart } from "../../contexts/CartContext";

const PRODUCTS = [
  {
    id: 1,
    name: "Leche colanta x1",
    price: 5000,
    image: "/leche-colanta.jpg",
  },
  {
    id: 2,
    name: "Huevos x 30",
    price: 20000,
    image: "/huevos-30.jpg",
    //image: "MAKRO-01-1024x648.jpg", //directo de public
  },
  {
    id: 3,
    name: "Quesito colanta",
    price: 9000,
    image: "/Quesito-Colanta.jpg",
  },
  {
    id: 4,
    name: "Huevos x 30",
    price: 20000,
    image: "/huevos-30.jpg",
  },
  {
    id: 5,
    name: "Quesito colanta",
    price: 9000,
    image: "/Quesito-Colanta.jpg",
  },
  {
    id: 6,
    name: "Huevos x 30",
    price: 20000,
    image: "/huevos-30.jpg",
  },
  {
    id: 7,
    name: "Quesito colanta",
    price: 9000,
    image: "/Quesito-Colanta.jpg",
  },
  {
    id: 8,
    name: "Huevos x 30",
    price: 20000,
    image: "/huevos-30.jpg",
  },
  {
    id: 9,
    name: "Quesito colanta",
    price: 9000,
    image: "/Quesito-Colanta.jpg",
  },
]

export const Products = () => {

  const { idShop } = useParams();
  const [searchProducts, setSearchProducts] = useState("");
  const {addItemToCart} = useCart(); //useContext(CartContext);

  const addToCartHandler = (idProduct) => {
    //alert(idProduct);
    //se agrega la variable para que añada la cantidad
    addItemToCart(idProduct);
  }
  //se agrega esta funcion para tomar el dato del producto
  const onSearchProducts = (data) => {
    setSearchProducts(data);
  }

  return (
    <Page>
      <p>Shop ID: {idShop}</p>
      <Search listener={{onSearchProducts}}/>
      <p>{searchProducts}</p>
      <ProductGrid>
      {
        PRODUCTS.map((item, key) => <Product 
        key={key} {...item} 
        onPress={addToCartHandler}
        hasAction={true}
        textAction="Agregar" /> )
      }
      </ProductGrid>
    </Page>
  );
}