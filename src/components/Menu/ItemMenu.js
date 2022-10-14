import { ItemMenuWrapper } from "./styles";
import { Link } from "react-router-dom";

//componente menu con tres parametros - ojo al path
export const ItemMenu = ({ icon: Icon, label, path }) => (
    <Link to={path}>
    <ItemMenuWrapper>
        <Icon />
        <p>{label}</p>
    </ItemMenuWrapper>
    </Link>
)