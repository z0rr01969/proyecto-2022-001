import { Link } from "react-router-dom";
import { Page } from "../../components/Page";
import { useUser } from "../../contexts/UserContext";
import { Button } from "../../globalStyles";
import { Theme } from "../../themes/theme";

export const Profile = () => {

  const {user} = useUser();

  //esta linea toca agregarla...
  const isAuth = false;

  const UserInfo = () => (
    <div>
      <h3>{user.name}</h3>
      <h5>{user.phone}</h5>
      <p>{user.email}</p>
      <br />
      <br />
      <Button>Cerrar sesión</Button>
    </div>
  );

  const UserUnauhtorized = () => (
    <div>
      <p>Para acceder a tu perfil, inicia sesión</p>
      <Link to={"/login"}>
        <Button bgColor={Theme.alternative}>Iniciar Sesión</Button>
      </Link>
      <br /><br /><br />
      <p>Registra una Cuenta, Aqui...</p>
      <Link to={"/singup"}>
        <Button bgColor={Theme.secoundary}>Registrarme</Button>
      </Link>
    </div>
  )

  return (
    <Page>
      <h1>Mi Cuenta</h1>
      { isAuth ? <UserInfo /> : <UserUnauhtorized /> }

      {/* revisar esto....user.isAuthenticated ? <UserInfo /> : <UserUnauhtorized /> */}
    </Page>
  );
};

//______Mi Codigo_________________________

/*
export const Profile = () => {

  const {user} = useUser();

  /*esto se modifica con el servidor, es momentaneo.
    const isAuth = false;
    const user ={
      name: "Fernando",
      phone: '55555',
      email: 'cardenaslufer@gmail.com',
      avatar: '',
    };
    
    //const isAuth = false;

  const UserInfo = () => (
    <div>
      <h3>{user.name}</h3>
      <h3>{user.phone}</h3>
      <h3>{user.email}</h3>
      <br />
      <br />
      <Button>Cerrar Sesion</Button>
    </div>    
  );

  const UserNoautorizado = () => (
    <div>
      <p>Para Acceder inicia Sesion</p>
      <Link to = { "/Login" }>
        <Button bgColor={Theme.alternative}>Iniciar Sesion</Button>
      </Link>
      <br /><br /><br />
      <p>Registra una Cuenta, Aqui...</p>
      <Link to = { "/Singup"}>
      <Button bgColor={Theme.secoundary}>Registrate</Button>
      </Link>
    </div>
  )

  return (
    <Page>
      <h1>Mi Cuenta</h1>
      { isAuth ? <UserInfo /> : <UserNoautorizado></UserNoautorizado>}

//para verificar......

      { user.isAuthenticated ? <UserInfo /> : <UserNoautorizado />}
    </Page>
  );
}
*/