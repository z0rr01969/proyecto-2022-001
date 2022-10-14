import styled from 'styled-components';
import { BOTTOM_MENU_HEIGTH, TOP_BAR_HEIGTH } from '../../themes/theme';

//ubicacion del componente pagina
export const PageWrapper = styled.div`
    margin: 0 15px;
    margin-top: ${TOP_BAR_HEIGTH + 15}px;
    margin-bottom: ${BOTTOM_MENU_HEIGTH + 15}px;
    //border: 1px solid red;
`;