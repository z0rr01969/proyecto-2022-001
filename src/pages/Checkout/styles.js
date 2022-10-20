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
`;

export const ItemCartWrapper = styled.div`
    margin: 16px 0;
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 6px;
    display: flex;
    border-color: red;
    flex-direction: row;
    p {
        font-weight: 300;
        font-size: 0.85em;
    };
`;

/*width: 400px;
    border-left: 1px solid #ccc;
    //height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    flex: 1;
    border: 1px solid red;
    transition:all .7s ease-in-out;*/

