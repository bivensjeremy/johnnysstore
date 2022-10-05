import commerce from '../../lib/commerce'
import Head from 'next/head';
import { Container, Grid, Card, Typography, Button, Popover, Box } from '@mui/material';
import Image from 'next/image';
import RelatedItems from '../../components/Shop/RelatedItems';
import React, { useState } from 'react';
import { CartDispatch } from '../../context/loadCartData';
  
export async function getStaticProps({ params }) {
    const { permalink } = params;
    const product = await commerce.products.retrieve(permalink, {
        type: 'permalink'
    });
    return { props: { product } }
}

export async function getStaticPaths() {
    const { data: products } = await commerce.products.list({ limit: 200 });
    return {
        paths: products.map((product) => ({
            params: {
                permalink: product.permalink,
            },
        })),
        fallback: false,
    };
}

function createRelatedProductCard(product, {addToCart}) {
    return(
        <RelatedItems 
            key={product.id}
            products={product} 
            addToCart={addToCart}
        />
    )
};

const ProductPage = ({ product }) => {
    const [addSuccess, setAddSuccess] = useState(false);
    const { setCart } = CartDispatch();
    const { available } = product.inventory;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const addToCart = async (productID) => {
        const {cart} = await commerce.cart.add(productID);
        setCart(cart);
     }

    return (
        <div>
            <Head>
                <title>Johnny&apos;s | {product.name}</title>
                {/* Favicons */}
                <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
                <link rel="manifest" href="images/site.webmanifest" />
                <link rel="icon" href="images/favicon.ico" />
            </Head>
            
            <Container sx={{ paddingY: 5 }}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <div align='center'>
                            <Card sx={{  
                                backgroundColor: '#F5F5F5', 
                                borderColor: '#F5F5F5',
                                paddingX: 2, 
                                paddingY: 2,
                                borderRadius: 4,
                                margin: 5,
                                position: 'relative',
                            }}
                            variant="outlined" 
                            >
                                <Card sx={{ 
                                    position: 'relative', 
                                    width: '100%', 
                                    height: '100%', 
                                    borderRadius: 3, 
                                    display: 'block',
                                }}>
                                    <Image
                                        src={product.media.source}
                                        alt={product.name}
                                        layout="responsive"
                                        height='50%'
                                        width='50%'
                                        objectFit="cover" 
                                        placeholder='blur'
                                        blurDataURL={product.media.source}
                                        onClick={handleClick} 
                                        priority
                                        sizes='50vw'
                                    />
                                </Card>  
                                <Box sx={{ fontStyle: 'italic' }}>
                                    <Typography>
                                        Click image to enlarge
                                    </Typography> 
                                </Box>     
                            </Card>
                        </div>
                        
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'top',
                            }}
                        >
                            <Image
                                src={product.media.source}
                                alt={product.name}
                                layout="intrinsic"
                                height={800}
                                width={700}
                            />
                        </Popover>
                    </Grid>

                    <Grid item xs={12} md={6} marginY='auto'>
                            <Typography variant='h2'>
                                {product.name}
                            </Typography>

                            <Typography variant='h6'>
                                <span dangerouslySetInnerHTML={{__html:product.description}} />
                            </Typography>

                            <Typography variant='h4' fontWeight={700} gutterBottom>
                                {product.price.formatted_with_symbol}
                            </Typography>
                            <div align='left'>
                                {addSuccess ? (
                                    <Button 
                                        variant="contained" size='large' 
                                        sx={{ mx: 'auto' }}
                                        disabled
                                    >Item Added!</Button>
                                ):(
                                    <Button 
                                        variant="contained" size='large' 
                                        sx={{ mx: 'auto' }}
                                        disabled={available === 0} 
                                        onClick={() => addToCart(product.id).then(setAddSuccess(true))}
                                    >
                                    { available === 0 ? 'Out of Stock' : 'Add To Cart' }
                                    </Button> 
                                )}
                            </div>
                    </Grid>

                    <Container align='center'sx={{ paddingY: 5 }}>
                        <Typography variant='h5' fontWeight={700}>
                            Check out these other items
                        </Typography>

                        <Grid container>
                            {product.related_products.map(createRelatedProductCard)}
                        </Grid>
                    </Container>
                </Grid>
            </Container>
        </div>
    );
}

export default ProductPage;