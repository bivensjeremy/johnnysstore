import { Card, CardContent, CardActions, Button, Typography, Link, Box } from "@mui/material";
import Image from "next/image";

const FeaturedItem = ({products}) => {

    return (
        <Card 
            raised={false} 
            sx={{ 
                maxWidth: 370, 
                backgroundColor: '#F5F5F5',  
                padding: 3, 
                borderRadius: 4 
            }}>
            <Card sx={{ position: 'relative', width: '100%', height: '100%', borderRadius: 6, display: 'block' }}>
                <Image
                    src={products.media.source}
                    alt='Featured Product Image'
                    layout="responsive"
                    placeholder='blur'
                    blurDataURL={products.media.source}
                    height={70}
                    width='100%'
                    objectFit="cover"
                    sizes="10vw"
                />    
            </Card>

            <CardContent align='center'>
                <Typography variant="h5" component="div" fontWeight={700}>
                    {products.name}
                </Typography>

                <Typography variant="h6" component="div">
                    {products.price.formatted_with_symbol}
                </Typography>
            </CardContent>
                
            <CardActions>
                <Box sx={{ margin: 'auto' }}>
                    <Link href={'/productpage/' + products.permalink}>
                        <Button variant="contained" size='large' sx={{ mx: 'auto' }}>View Item</Button>
                </Link>
                </Box>
            </CardActions>
        </Card>
    );
}

export default FeaturedItem;