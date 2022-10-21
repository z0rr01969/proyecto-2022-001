import { CartGrid, ItemCartWrapper } from "./styles";
import { Products, PRODUCTS } from "../Products/index";
import { Page } from "../../components/Page/index";
import { useCart } from "../../contexts/CartContext";
import { useState } from "react";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormControlActions,
    FormControlInput,
} from "../../globalStyles";
import { useForm } from "react-hook-form"
//Revisar los import


export const Checkout = () => {

    //prueba por consola si se muestra el array de productos
    console.warn(PRODUCTS);

    //posibles variables usadas en el cuerpo del codigo
    
    const { addCart }  = useForm({ mode: "onChange" });
    const { addItemToCart } = useCart(); //useContext(CartContext);
    const addToCartHandler = (idProduct) => {
        addItemToCart(idProduct);
    }
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" });
    const onSubmitLogin = (data) => { console.log('data', data);}

    //retorno de la funcion
    return (
        <Page>

            {/* codigo para tomar los productos seleccionados y mostrados aqui */}

            <ItemCartWrapper>
                {
                    <Products {...PRODUCTS}
                        img={PRODUCTS.image}
                        onPress={addCart}
                        hasAction={true} />
                }
                <h3>Total precio</h3>
            </ItemCartWrapper>

            {/* datos para el pedido y envio de productos */}
            <ItemCartWrapper>
                <h1>Registrar un Pedido</h1>
                <form onSubmit={handleSubmit(onSubmitLogin)}>

                    <FormControl>
                        <FormControlLabel>Nombres y Apellidos</FormControlLabel>
                        <FormControlInput type="text"
                            {...register("text", { required: true, pattern: /[A-Za-z]/ })} />
                        {errors.text?.type === "required" &&
                            (<span>Ingrese un Nombre</span>)
                        }
                        {errors.text?.type === "pattern" &&
                            (<span>Ingrese solo letras</span>)
                        }
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>Direccion de Envio</FormControlLabel>
                        <FormControlInput type="text1"
                            {...register("text1", { required: true, pattern: /[A-Za-z] [0-9]/ })} />
                        {errors.text1?.type === "required" &&
                            (<span>Este campo es obligatorio</span>)
                        }
                        {errors.text1?.type === "pattern" &&
                            (<span>Ingrese una Direccion valida</span>)
                        }
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>Numero Telefonico</FormControlLabel>
                        <FormControlInput type="text2"
                            {...register("text2", { required: true, pattern: /[0-9] {10}/ })} />
                        {errors.text2?.type === "required" &&
                            (<span>Este campo es obligatorio</span>)
                        }
                        {errors.text2?.type === "pattern" &&
                            (<span>Ingrese solo Numeros</span>)
                        }
                    </FormControl>

                    <FormControlActions>
                        <Button disabled={!isValid} type="submit">Registrar</Button>
                    </FormControlActions>
                </form>
            </ItemCartWrapper>
        </Page>
    );
}