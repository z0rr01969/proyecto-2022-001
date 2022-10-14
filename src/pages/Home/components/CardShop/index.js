import { CardShopContent, CardShopImage, CardShopWrapper } from "./styles";

//componente inplicito sin return
//inicial/ se colocan <div> despues se modifican segun parametros de styles.js
export const CardShop = ({id, image, name, location, category}) => (
    <CardShopWrapper to={ `/products/${id}` }>
        <CardShopImage>
            <img src={image} alt={name} />
        </CardShopImage>
        <CardShopContent>
            <h4>{name}</h4>
            <p>{location}</p>
            <span>{category}</span>
        </CardShopContent>
    </CardShopWrapper>
);