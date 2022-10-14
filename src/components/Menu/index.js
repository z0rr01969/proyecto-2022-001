//importar recursos de otros archivos
import { IoHome, IoCart, IoPerson } from "react-icons/io5";
import { ItemMenu } from "./ItemMenu";
import { MenuWrapper } from "./styles";

//crea el componente menu con los tres elementos graficos
const MenuOptions = [
  {
    icon: IoHome,
    label: "Inicio",
    path: "/",
  },
  {
    icon: IoCart,
    label: "Carrito",
    //verificar el :idShop de Productos.
    path: "/Products/:idShop",
  },
  {
    icon: IoPerson,
    label: "Usuario",
    path: "/Profile",
  },
];

//exporta el componente menu, icono, texto y ruta
export const Menu = () => {
  return (
    //componente que recorre el arreglo (i)
    <MenuWrapper>
      {MenuOptions.map((item, i) => (
        <ItemMenu 
          key={i}
          icon={item.icon}
          label={item.label}
          path={item.path}
        />
      ))}
    </MenuWrapper>
  );
};
