import styled from "styled-components";
import { Theme, TOP_BAR_HEIGTH } from "../../themes/theme";

//stilos de la barra superior
export const TopbarWrapper = styled.div`
    width: 100%;
    height: ${TOP_BAR_HEIGTH}px;
    position: fixed;
    top: 0;
    left: 0;
    background: ${Theme.primary};
    display: flex;
    //relevancia superior al resto por un valor cualquiera
    z-index: 999999;
    //border: 4px solid red;
`;

//estilo carrito de compras
export const CartWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding: 6px 10px;
    align-items: center;
    //border: 1px solid red;
    svg {
        color: #fff;
        font-size: 1.8em;
    }
`;

//estilos del logo
export const LogoWrapper = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    img {
        width: 180px;
    }
    //border: 4px solid red;71
`;

export const CartQuantity = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${Theme.secoundary};
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 7px;
  right: 2px;
  border: 1px solid ${Theme.secoundary};
  p {
    color: #fff;
    margin: 0;
    padding: 0;
    font-size: 0.77em;
    font-weight: 700;
  }
`;