import Link from "next/link";
import Image from "next/image";
import { Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { useState } from "react";


const Item = ({ products, addToCart }) => {
    const { available } = products.inventory;
    const [addSuccess, setAddSuccess] = useState(false);
    
    return (
        <Grid item xs={6} sm={4} md={3}>
            <Card sx={{ 
                maxWidth: 300, 
                backgroundColor: '#F5F5F5', 
                paddingX: 2, 
                paddingY: 2,
                borderRadius: 4,
                margin: 1,
                borderColor: '#F5F5F5', 
                position: 'relative'
                }}
                variant="outlined" 
            >
                <Card sx={{ position: 'relative', width: '100%', height: '100%', borderRadius: 6, display: 'block' }}>
                    <Link href={'/productpage/' + products.permalink}><a>
                        <Image
                            src={products.media.source}
                            alt={products.name}
                            layout="responsive"
                            // placeholder='blur'
                            // blurDataURL={products.media.source}
                            height='10%'
                            width='10%'
                            objectFit="cover"
                            sizes="50vw"
                        />
                    </a></Link>
                </Card>

                <CardContent align='center'>
                    <Typography variant="h5" component="div" noWrap>
                        {products.name}
                    </Typography>

                    <Typography variant="h6">
                        {products.price.formatted_with_symbol}
                    </Typography>
                    
                    { addSuccess ? (
                        <Button 
                            variant="contained"
                            sx={{ mx: 'auto' }}
                            disabled
                        >
                        Item Added!
                        </Button> 
                    ) : (
                        <Button 
                            variant="contained" 
                            sx={{ mx: 'auto' }}
                            disabled={available === 0} 
                            onClick={()=> addToCart(products.id).then(setAddSuccess(true))}
                        >
                        { available === 0 ? 'Out of Stock' : 'Add To Cart' }
                        </Button>
                    )}
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Item;