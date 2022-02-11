import commerce from '../lib/commerce';
import Head from 'next/head';
import { Container, Grid, Typography } from '@mui/material';
import ProductSection from '../components/Shop/ProductSection';
import { CartDispatch } from '../context/loadCartData';

export async function getStaticProps() {
    const { data: tops } = await commerce.products.list({ 
        category_slug: ['shirt'],
        limit: 100,
    });
    const { data: bottoms } = await commerce.products.list({ 
        category_slug: ['pants' || 'shorts'],
        limit: 100,
    });
    const { data: hats } = await commerce.products.list({ 
        category_slug: ['hat'],
        limit: 100,
    });
    const { data: games } = await commerce.products.list({ 
        category_slug: ['video-game'],
        limit: 100,
    });
    
    return { props: { tops, bottoms, hats, games, }, };
  };

const store = (props) => {
    const { setCart } = CartDispatch();

    const addToCart = async (productID) => {
       const {cart} = await commerce.cart.add(productID);
       setCart(cart);
    }

    return (
        <div>
            <Head>
                <title>Shop</title>
            </Head>
            <Container sx={{ paddingY: 5 }}>
                <div align='center'>
                    <Typography variant='h2' gutterBottom>
                        Shop
                    </Typography>
                </div>

                <Grid container>
                    <ProductSection 
                        product={props.tops} 
                        title='Shirts'
                        addToCart={addToCart}
                    />
                </Grid>

                <Grid container>
                    <ProductSection 
                        product={props.bottoms} 
                        title='Bottoms' 
                        addToCart={addToCart}
                    />
                </Grid>

                <Grid container>
                    <ProductSection 
                        product={props.hats} 
                        title='Hats' 
                        addToCart={addToCart}
                    />
                </Grid>

                <Grid container>
                    <ProductSection 
                        product={props.games} 
                        title='Video Games'
                        addToCart={addToCart} 
                    />
                </Grid>
            </Container>
        </div>
    );
}

export default store;