import { Page } from "../../components/Page";
import { Search } from "../../components/Search";
import { CardShop } from "./components/CardShop";
import { useState } from "react";

//creacion de las tiendas mediante arreglo
//temporal/ ya que esto va apuntado a una BD
const SHOPS = [
{
  id:1,
  name: "D1",
  image: "Tiendas_D1_logo.webp", //directo de public
  location: "Tienda D1 en Medellin",
  category: "Supermercado",
},
{
  id:2,
  name: "Makro",
  image: "MAKRO-01-1024x648.jpg", //directo de public
  location: "Tienda Makro en Medellin",
  category: "Supermercado",
},
{
  id:3,
  name: "La Tienda del Peluquero",
  image: "la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg", //directo de public
  location: "Tienda La Tienda del Peluquero en Medellin",
  category: "Belleza",
},
{
  id:4,
  name: "La Tienda del Peluquero",
  image: "la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg", //directo de public
  location: "Tienda La Tienda del Peluquero en Medellin",
  category: "Belleza",
},
{
  id:5,
  name: "La Tienda del Peluquero",
  image: "la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg", //directo de public
  location: "Tienda La Tienda del Peluquero en Medellin",
  category: "Belleza",
}
];

//listado de tiendas - temporal/
//en L36 - {...desestructuracion} presenta los elementos de forma individual
export const Home = () => {

  const [searchShops, setSearchShops] = useState("");

  const onSearchShops = (data) => {
    setSearchShops(data);
  }

  return (
    <Page>
      <Search searchTerm="" listener={onSearchShops} />
      { searchShops !== "" && (<p>Filtro: <strong>{searchShops}</strong></p>)
      }
      {
        SHOPS.map((item, key) => <CardShop key={key} {...item} /> )
      }
    </Page>
  );
}