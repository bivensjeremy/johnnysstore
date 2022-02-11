import { Grid, Typography } from "@mui/material";

const YourOrderItems = ({ line_items }) => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <div align="start">
                    <Typography variant='h6'>
                        ({line_items.quantity}) {line_items.name}
                    </Typography>
                </div> 
            </Grid>

            <Grid item xs={6}>
                <div align="center">
                    <Typography variant='h6'>
                        {line_items.line_total.formatted_with_symbol}
                    </Typography>
                </div>  
            </Grid>
        </Grid>
        
    );
}

export default YourOrderItems;