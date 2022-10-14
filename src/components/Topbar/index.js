import { TopbarWrapper, CartWrapper, LogoWrapper, CartQuantity } from "./styles";
import { IoCart } from "react-icons/io5";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

//barra superior, insercion de logo y carrito
export const Topbar = () => {

  //se modifica el cart y setcart de cartcontext
  //se puede borrar el setcart
  //const {cart, setCart} = useContext(CartContext);
  const {cart} = useCart();

return(
  <TopbarWrapper>
    <LogoWrapper>
      <img src="/logoapp.png" alt="logo" />
    </LogoWrapper>
    <CartWrapper>
      <Link to={'/Checkin'}>
        <IoCart />
      </Link>
      {
        cart.quantity > 0 && (
          <CartQuantity>
            <p>{cart.quantity}</p>
          </CartQuantity>
        )
      }
    </CartWrapper>
  </TopbarWrapper>
);
};