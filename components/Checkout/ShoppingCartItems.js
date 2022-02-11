import { Delete } from "@mui/icons-material";
import { Typography, Card, IconButton } from "@mui/material"
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const ShoppingCartItems = ({cartItems, deleteItem}) => {
    return (
        <Box sx={{
            backgroundColor: {xs: 'none', md: '#fff'}, 
            borderRadius: 3, 
            marginY: 2, 
            padding: 1, 
            display: 'flex', 
            flexDirection: {xs: 'column', md: 'row'}
        }}>   
            <Card sx={{ 
                position: 'relative', 
                width: { xs: 300, md: 100 }, 
                height: '100%', 
                borderRadius: 3, 
                display: 'block',
                marginRight: {xs: 'none', md: 3},
                marginX: 'auto'
            }}>
                <Link href={'/productpage/' + cartItems.permalink}><a>
                    <Image
                        src={cartItems.media.source}
                        alt={cartItems.name}
                        layout="responsive"
                        placeholder='blur'
                        blurDataURL={cartItems.media.source}
                        height='100%'
                        width='100%'
                        objectFit="cover"
                        sizes="50vw"
                    />
                </a></Link>
            </Card>

            <Typography variant='h6' fontSize={25} gutterBottom fontWeight={700} sx={{marginX: {xs: 'auto', md: 0}, marginY: 'auto'}}>
                {cartItems.name}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ paddingX: 5, margin: 'auto', display: 'flex', flexDirection: {xs: 'row', md: 'column'}}}>
                {/* <Button 
                    variant='contained' 
                    color='error' 
                    startIcon={<Delete />}
                    onClick={() => deleteItem(cartItems.id)}
                >
                Delete
                </Button>  */}
                <Typography variant='body1' sx={{margin: 'auto', display: {sm: 'none', md: 'flex'}}}>
                    Delete Item:
                </Typography>
                <div align='center'>
                    <IconButton onClick={() => deleteItem(cartItems.id)} >
                    <Delete />
                </IconButton>
                </div>
                
            </Box>
            
            <Box sx={{paddingX: 5, margin: 'auto', display: 'flex', flexDirection: {xs: 'row', md: 'column'}}}>
                <Typography variant='body1' sx={{margin: 'auto', paddingX: 1}}>
                    Quantity:
                </Typography>
                <div align='center'>
                    <Typography variant="h5">
                        {cartItems.quantity}
                    </Typography>
                </div>
                
            </Box>
            
            <Box sx={{paddingX: 5, margin: 'auto', display: 'flex', flexDirection: {xs: 'row', md: 'column'}}}>
                <Typography variant='body1' sx={{margin: 'auto', paddingX: 1, display: {sm: 'none', md: 'flex'}}}>
                    Price:
                </Typography>
                <div align='center'>
                    <Typography variant="h5">
                        {cartItems.line_total.formatted_with_symbol}
                    </Typography>
                </div>
                 
            </Box>
        </Box>
    );
}

export default ShoppingCartItems;