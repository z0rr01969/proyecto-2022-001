import styled from "styled-components";


export const CartGrid = styled.section`
  
  width: 100%;
  margin: 6px 8px;
  border: 1px solid #ccc;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: red;
  p {
    width: 100%;
    margin: 6px 0;
    font-weight: 300;
  }
`;

export const ItemCartWrapper = styled.div`
    flex: 1;
    width: 100%;
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
    };
`;