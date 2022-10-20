import styled from "styled-components";
import { Theme } from "../../themes/theme";

export const CartGrid = styled.section`
    margin: 16px 0;
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 6px;
    display: flex;
    border-color: red;
    flex-direction: row;
  p {
    margin: 6px 0;
    font-weight: 300;
  }
  h3 {
    width: auto;
    margin: 3px 0;
    font-size: 0.99em;
    font-weight: 400;
  }
`;
 
export const ItemCartWrapper = styled.div`
    width: 400px;
    border-left: 1px solid #ccc;
    //height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    flex: 1;
    border: 1px solid red;
    transition:all .7s ease-in-out;
    //cambio de color segun parametros
    /*svg {
        color: ${Theme.secoundary};
        font-size: 1.5em;
        }*/
    p {
        color: ${Theme.secoundary};
        font-weight: 300;
        font-size: 0.85em;
    }
`;

