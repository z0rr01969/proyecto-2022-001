import { Menu } from "../Menu";
import { Topbar } from "../Topbar";
import { PageWrapper } from "./styles";

//componente pagina con parametros heredados
export const Page = (props) => (
  <>
    <Topbar />
    <PageWrapper>
      { props.children }
    </PageWrapper>
    <Menu />
  </>
);
