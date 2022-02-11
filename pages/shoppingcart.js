import { Container, Typography } from "@mui/material";
import Head from "next/head";
import EmptyCart from "../components/Checkout/EmptyCart";
import ShoppingCartItems from "../components/Checkout/ShoppingCartItems";
import Subtotal from "../components/Checkout/Subtotal";
import { CartDispatch, CartState } from "../context/loadCartData";
import commerce from "../lib/commerce";

const shoppingcart = () => {
    const {line_items, subtotal} = CartState();
    const { setCart } = CartDispatch();
    
    const deleteItem = async (productID) => {
        const {cart} = await commerce.cart.remove(productID);
        setCart(cart);
    };

    const emptyCart = async () => {
        const {cart} = await commerce.cart.delete();
        setCart(cart);
    };

    return (
        <div>
            <Head>
                <title>Johnny&apos;s | Shopping Cart</title>
            </Head>
       
            <Container sx={{ paddingY: 5 }}>
                <div align='center'>
                    <Typography variant='h2' gutterBottom>
                        Shopping Cart
                    </Typography>
                </div>

                {line_items.length === 0 ? <EmptyCart /> : 
                    <div>
                        { line_items.map((line_items) => (
                            <ShoppingCartItems 
                                key={line_items.id}
                                cartItems={line_items}
                                deleteItem={deleteItem}
                            />
                        ))} 
                        <Subtotal 
                            subtotal={subtotal}
                            emptyCart={emptyCart}
                            totalItems={line_items.length}
                        /> 
                    </div>
                }
            </Container>
        </div>
    );
}

export default shoppingcart;