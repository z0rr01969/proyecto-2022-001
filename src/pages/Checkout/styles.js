import styled from "styled-components";

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
    h3 {
      display: flex;
      text-align: end;
      position: unset;
      flex-direction: column-reverse;
    }
`;