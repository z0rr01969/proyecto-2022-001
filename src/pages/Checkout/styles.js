import styled from "styled-components";


export const CartGrid = styled.section`
  width: 100%;
  margin: 16px 0;
  border: 1px solid #ccc;
  padding: 25px;
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
    width: 100%;
    margin: 10px 0;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 26px;
    display: flex;
    border-color: red;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    p {
        font-weight: 300;
        font-size: 0.85em;
    };
    h2 {
      width: 30%;
      display: flex;
      text-align: end;
      position: unset;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    };
    h3 {
      width: 100%;
      display: flex;
      text-align: end;
      position: unset;
      flex-direction: column-reverse;
    };
`;