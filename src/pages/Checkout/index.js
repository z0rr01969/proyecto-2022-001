import { CartGrid, ItemCartWrapper } from "./styles";
import { Products, PRODUCTS } from "../../pages/Products/index";
import { Page } from "../../components/Page/index";
import { useCart } from "../../contexts/CartContext";
import { currencyFormat } from "../../utils/CurrencyFormat";
import { Theme } from "../../themes/theme";
import { Product } from "../../components/Product/index";
import { ProductGrid } from "../../pages/Products/styles";
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
    const { addItemToCart } = useCart(); //useContext(CartContext);
    const addToCartHandler = (idProduct) => {
        addItemToCart(idProduct);
    }

    const onClickListener = ({ id, name, price, image, onPress, hasAction }) => (
        <Product>
            <img src={PRODUCTS.image} alt={PRODUCTS.name} width="50px" />
            <p>{PRODUCTS.name}</p>
            <h6>{currencyFormat(PRODUCTS.price)}</h6>
            {
                hasAction && <Button onClick={e => onPress(id)} bgColor={Theme.secoundary} >X</Button>
            }
        </Product>
    );

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" });
    const onSubmitLogin = (data) => { console.log('data', data); }

    //retorno de la funcion
    return (
        <Page>
            <h2>Estos son tus Productos Seleccionados:</h2>
            {/* codigo para tomar los productos seleccionados y mostrados aqui */}
            <ItemCartWrapper>
                <Product onClick={onClickListener} />
                <div>
                    <Button>+</Button>
                </div>
                <div>
                    <Button>-</Button>
                </div>
                <div>
                    <Button>Eliminar Producto</Button>
                </div>
            </ItemCartWrapper>


            {/* datos para el pedido y envio de productos */}
            <ItemCartWrapper>
                <CartGrid>
                    <td>
                        <tr>
                            <div>
                                <h3>I. V. A. ..-(19%)= (Valor !)</h3>
                            </div>
                        </tr>
                        <tr>
                            <div>
                                <h3>Precio TOTAL...= (Valor !)</h3>
                            </div>
                        </tr>
                    </td>
                </CartGrid>

                <form onSubmit={handleSubmit(onSubmitLogin)}>
                    <CartGrid>
                        <h2>Registra tu Pedido</h2>
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
                    </CartGrid>
                </form>
            </ItemCartWrapper>
        </Page>
    );
}

/* ENSAYOS DE CODIGO:

****************************************************************************************

    /*
        const onClickListener = (onClick) => {
            if (addToCartHandler > 0) {
            <Product>
                <img src={image} alt={name} width="50px" />
                <p>{name}</p>
                <h6>{currencyFormat(price)}</h6>
                {
                    hasAction && <Button onClick={e => onPress(id)} bgColor={Theme.secoundary} >{textAction} </Button>
                }
            </Product>
            PRODUCTS.map((item, key) => <Product
              key={key} {...item}
              onPress={addToCartHandler}
              hasAction={true}
              />)

****************************************************************************************


export const addProduct = ({ id, name, price, image, onPress, hasAction }) => (
    <>
        <img src={Products.image} alt={name} width="50px" />
        <p>{Products.name}</p>
        <h6>{currencyFormat(Products.price)}</h6>
        {
            hasAction && <Button onClick={e => onPress(id)} bgColor={Theme.secoundary} >{Products.image}, {Products.price} </Button>
        }
    </>
);
****************************************************************************************
*/