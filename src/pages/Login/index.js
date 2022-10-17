import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormControlActions,
  FormControlInput,
} from "../../globalStyles";
import { useUser } from "../../contexts/UserContext";

//pagina de logeo input-correo y contraseña -validados con boton de ingreso
export const Login = () => {
  const {
    register, 
    handleSubmit, 
    reset, 
    formState: {errors, isValid},
  } = useForm({ mode: "onChange"});

  const {setAuthenticate, setUserInfo} = useUser();
  const navigate = useNavigate();

  const onSubmitLogin = (data) => {
    console.log("data", data);
    if (data.email === "cardenaslufer@gmail.com" && data.password === "196907") {
      setAuthenticate(true);
      setUserInfo({ name: "Fernando", email: "cardenaslufer@gmail.com", phone: "3107911608" });
      reset();
        setTimeout(() => {
          //navigate("/");
          navigate("/products/:idShop");
        }, 2000);
    } else {
      alert("Credenciales NO Validas");
    }
  };

  return (
    <Page>
      <h1>Iniciar Sesion</h1>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <FormControl>
          <FormControlLabel>Correo electronico</FormControlLabel>
          <FormControlInput type="email"
          {...register("email",{required: true, pattern: /\S+@\S+\.\S+/})}
          />
          
          {/*captura el error y no se inicializa, en este caso se coloca (?) para evitar la panatalla blanca.
          pattern valida el formato del correo electronico*/}

          { errors.email?.type === "required" && 
          (<span>Este campo es obligatorio</span>)
          }
          { errors.email?.type === "pattern" && 
          (<span>Ingrese un Correo valido</span>)
          }
        </FormControl>
        
        <FormControl>
          <FormControlLabel>Contraseña</FormControlLabel>
          <FormControlInput type="password" 
          {...register("password",{required: true})}
          />
          { errors.password?.type === "required" && 
          (<span>La contraseña es obligatoria</span>)
          }
        </FormControl>

        <FormControlActions>
          <Button disabled={!isValid} type="submit">Ingresar</Button>
        </FormControlActions>

        {/* prueba para verificar la validez del campo. { isValid ? "Es Valido" : "No es Valido" }
        */}
        
      </form>
    </Page>
  );
}
