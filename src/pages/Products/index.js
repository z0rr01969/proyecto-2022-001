import { useParams } from "react-router-dom";
import { Page } from "../../components/Page";
import { Product } from "../../components/Product";
import { Search } from "../../components/Search";
import { ProductGrid } from "./styles";
import { useState } from "react";
//import { useContext } from "react";
import { useCart } from "../../contexts/CartContext";

export const PRODUCTS = [
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
  },
  {
    id: 3,
    name: "Quesito colanta",
    price: 10000,
    image: "/Quesito-Colanta.jpg",
  },
  {
    id: 4,
    name: "Azucar x Lb",
    price: 3000,
    image: "/azucar.jpg",
  },
  {
    id: 5,
    name: "Sal x Lb",
    price: 2000,
    image: "/sal.png",
  },
  {
    id: 6,
    name: "Arroz x Lb",
    price: 2000,
    image: "/arroz.jpg",
  },
  {
    id: 7,
    name: "Cafe x Lb",
    price: 15000,
    image: "/cafe.png",
  },
  {
    id: 8,
    name: "Desodorante",
    price: 20000,
    image: "/desodorante.png",
  },
  {
    id: 9,
    name: "Jabon Baño",
    price: 3000,
    image: "/jabon.jpg",
  },
]

export const Products = () => {

  const { idShop } = useParams();
  const [searchProducts, setSearchProducts] = useState("");
  const { addItemToCart } = useCart(); //useContext(CartContext);

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
      <Search listener={onSearchProducts} />
      <p>filtro: {searchProducts}</p>
        <ProductGrid>
          {
            PRODUCTS.map((item, key) => <Product
              key={key} {...item}
              onPress={addToCartHandler}
              hasAction={true}
              textAction="Agregar" />)
          }
        </ProductGrid>
    </Page>
  );
}
