import { Container, Grid, Box, Typography } from "@mui/material";
import ReviewCartItems from "./ReviewCartItems";
import YourOrderItems from "./YourOrderItems";
import ReviewShipping from './ReviewShipping';

const Review = ({ formik, checkoutToken }) => {
    const { line_items, shipping, subtotal, total } = checkoutToken.live;   
    console.log(formik)
    return (
            <Container sx={{ paddingTop: 5 }}>
                <div align='center'>
                    <Box sx={{ 
                        width: '80%', 
                        display: 'flex', 
                        justifyContent: 'space-evenly' 
                    }}>
                        {line_items.map((line_items) => (
                            <ReviewCartItems 
                                key={line_items.id}
                                line_items={line_items} 
                            />
                        ))}
                    </Box>
                    
                    <Grid container sx={{ paddingY: 5 }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5'>
                                Shipping Details
                            </Typography>

                            <Box sx={{ mx: 'auto', width: '50%', border: 'none', borderTop: '4px dotted', marginY: 2 }} />

                            <ReviewShipping formik={formik} />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h5">
                                Your Order
                            </Typography>

                            <Box sx={{ mx: 'auto', width: '50%', border: 'none', borderTop: '4px dotted', marginY: 2 }} />

                            <Grid container>
                                {line_items.map((line_items) => (
                                    <YourOrderItems 
                                        key={line_items.id}
                                        line_items={line_items}
                                    />
                                ))} 
                            </Grid>

                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography variant='h6'>
                                        Subtotal: 
                                    </Typography>   
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant='h6'>
                                        { subtotal.formatted_with_symbol }
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography variant='h6'>
                                        Shipping
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    { shipping.price.raw > 0 ? (
                                        <Typography variant='h6'>
                                            {shipping.price.formatted_with_symbol}
                                        </Typography>
                                    ) : (
                                        <Box sx={{ fontStyle: 'italic' }}>
                                            <Typography variant='h6'>
                                                Free
                                            </Typography>
                                        </Box>
                                    )}
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography variant='h6'>
                                        Total
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant='h6' fontWeight={700}>
                                        {total.formatted_with_symbol}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container> 
    );
}

export default Review;