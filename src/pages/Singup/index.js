import { useForm } from "react-hook-form"
import { Page } from "../../components/Page";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormControlActions,
  FormControlInput,
} from "../../globalStyles";

//pagina solicita datos, crea usuario.
export const Singup = () => {

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({ mode: "onChange"});

    const onSubmitLogin = (data) => {
    console.log('data', data);}

  return (
    <Page>
      <h1>Registrar una Sesion</h1>
      <form onSubmit={handleSubmit(onSubmitLogin)}>

      <FormControl>
          <FormControlLabel>Nombres y Apellidos</FormControlLabel>
          <FormControlInput type="text1" 
          {...register("text1",{required: true, pattern: /[A-Za-z]/})}/>
          { errors.text1?.type === "required" && 
          (<span>Ingrese un Nombre</span>)
          }
          { errors.text1?.type === "pattern" && 
          (<span>Ingrese solo letras</span>)
          }
      </FormControl>

      <FormControl>
          <FormControlLabel>Correo electronico</FormControlLabel>
          <FormControlInput type="email"
          {...register("email",{required: true, pattern: /\S+@\S+\.\S+/})}/>
          
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
          <FormControlLabel>Numero Telefonico</FormControlLabel>
          <FormControlInput type="text" 
          {...register("text",{required: true, pattern: /[0-9] {10}/})}/>
          { errors.text?.type === "required" && 
          (<span>Numero Valido</span>)
          }
          { errors.text?.type === "pattern" && 
          (<span>Ingrese solo Numeros</span>)
          }
      </FormControl>
        
        <FormControl>
          <FormControlLabel>Contraseña</FormControlLabel>
          <FormControlInput type="password" 
          {...register("password",{required: true})}/>
          { errors.password?.type === "required" && 
          (<span>La contraseña es obligatoria</span>)
          }
      </FormControl>

      <FormControlActions>
          <Button disabled={!isValid} type="submit">Registrar</Button>
      </FormControlActions>
      </form>
    </Page>
  );
}