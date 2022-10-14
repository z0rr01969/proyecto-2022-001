import styled from 'styled-components';
import { Theme } from '../../../../themes/theme';
import { Link } from 'react-router-dom';

//crea componente caja de ficheros de las tiendas
export const CardShopWrapper = styled(Link)`
    //align-items: center;
    margin: 16px 0;
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 6px;
    display: flex;
    text-decoration: none;
    &:hover {
        background-color: #f6f6f6;
        -webkit-box-shadow: 2px 1px 14px 0px rgba(99,99,99,1);
        -moz-box-shadow: 2px 1px 14px 0px rgba(99,99,99,1);
        box-shadow: 2px 1px 14px 0px rgba(99,99,99,1);
    }
`;

//estilo de la imgen del fichero tienda
export const CardShopImage = styled.div`
    img {
        width: 80px;
    }
`;

//estilo de los datos (texto) del fichero tienda
export const CardShopContent = styled.div`
    flex: 1;
    margin: 0 8px;
    //border: 1px solid red;
    h4 {
        margin: 3px 0px;
        font-size: 1.3em;
        color: ${Theme.primary_text};
        //font-size: 1em; ojo revisar
    }
    p {
        color: ${Theme.primary_text};
    }
    span {
        font-weight: 300;
        color: ${Theme.primary_text};
    }
`;
