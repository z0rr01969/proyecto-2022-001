import { GlobalStyle } from "./globalStyles";
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from "./pages/Navigation";
import { CartContextStore } from "./contexts/CartContext";

//el main o componente principal
export const App = () => (
  <BrowserRouter>
    <userContextStore>
    <CartContextStore>
    <GlobalStyle />
    <Navigation />
    </CartContextStore>
    </userContextStore>
  </BrowserRouter>
)