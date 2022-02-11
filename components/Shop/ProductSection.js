import Item from "./Item";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";


const ProductSection = (props) => {
    return (
        <div id={props.title} align='center'>
            <Box sx={{ backgroundColor: '#052469', color: '#FFF', borderRadius: 4, width: '50%' }}>
                <Typography variant='h5'>
                    ~ {props.title} ~
                </Typography>
            </Box>
            

            <Grid container>
                {props.product.map((product) => (
                    <Item 
                        products={product} 
                        key={product.id}
                        addToCart={props.addToCart}
                    />
                ))}
            </Grid>
        </div>
    );
}

export default ProductSection;