import { CartGrid, ItemCartWrapper } from "./styles";
import { Products, PRODUCTS } from "../Products/index";
import { Page } from "../../components/Page/index";
import { useCart } from "../../contexts/CartContext";
import { currencyFormat } from "../../utils/CurrencyFormat";
import { Theme } from "../../themes/theme";
import { ProductGrid } from "../Products/styles";
import { Product } from "../../components/Product";
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
    //console.warn(addProduct);

    //posibles variables usadas en el cuerpo del codigo
    const { addItemToCart } = useCart(); //useContext(CartContext);
    const addToCartHandler = (idProduct) => {
        addItemToCart(idProduct);
    }
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" });
    const onSubmitLogin = (data) => { console.log('data', data); }

    //retorno de la funcion
    return (
        <Page>

            {/* codigo para tomar los productos seleccionados y mostrados aqui */}
            <ItemCartWrapper>
                <ProductGrid listener={onclick}>
                    {
                        PRODUCTS.map((item, key) => <Product onClick={Products.name}
                            key={key} {...item}
                            onPress={addToCartHandler}
                            hasAction={true}
                        /> )
                    }
                </ProductGrid>
                <td>
                    <tr>
                        <div>
                            <h3>I. V. A. ..-(19%)</h3>
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <h3>Precio TOTAL...</h3>
                        </div>
                    </tr>
                </td>
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
/*
export const addProduct = ({ id, name, price, image, onPress, hasAction }) => (
    <>
        <img src={Products.image} alt={name} width="50px" />
        <p>{Products.name}</p>
        <h6>{currencyFormat(Products.price)}</h6>
        {
            hasAction && <Button onClick={e => onPress(id)} bgColor={Theme.secoundary} >{Products.image}, {Products.price} </Button>
        }
    </>
);*/