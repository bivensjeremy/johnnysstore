import { Paper, Typography, Grid, Box } from "@mui/material";

const KeyItemsCard = (keyItems) => {
    return (
        <Grid item xs={6} md={3}>
            <Paper elevation={0} align='center' sx={{ maxWidth: 345, padding: 4, backgroundColor: '#F5F5F5' }}>
                
                <Box sx={{ color: '#F05454' }}>
                    <span className='material-icons' style={{fontSize: 48 + 'px'}}>{keyItems.image}</span>
                </Box>
                
                <Typography color='inherit' fontWeight={700} variant='h5'>
                    {keyItems.name}
                </Typography>
                
                <Typography color='inherit' variant='body1'>
                    {keyItems.description}
                </Typography>
            </Paper>
        </Grid>
    );
}

export default KeyItemsCard;