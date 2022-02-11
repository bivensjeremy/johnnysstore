import { Card, CardContent, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const RelatedItems = ({products}) => {
    return (
        <Grid item xs={12} sm={3} marginX='auto' padding={3}>
            <Link href={'/productpage/' + products.permalink}><a>
                <Card raised={false} sx={{ maxWidth: 250, backgroundColor: '#F5F5F5',  padding: 2, borderRadius: 4 }}>
                    <Card sx={{ position: 'relative', width: '100%', height: '100%', borderRadius: 6, display: 'block' }}>
                        <Image
                            src={products.media.source}
                            alt={products.name}
                            layout="responsive"
                            placeholder='blur'
                            blurDataURL={products.media.source}
                            height='100%'
                            width='100%'
                            objectFit="cover"
                            sizes="50vw"
                        />
                    </Card>
                    <CardContent align='center'> 
                        <Typography variant="h6">
                            {products.name}
                        </Typography>
                    
                        <Typography variant="subtitle1">
                            {products.price.formatted_with_symbol}
                        </Typography>
                    </CardContent>
                </Card>
            </a></Link>
        </Grid>
    );
}

export default RelatedItems;