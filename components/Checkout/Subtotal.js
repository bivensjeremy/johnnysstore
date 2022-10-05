import { DeleteForever, ShoppingCartCheckout } from "@mui/icons-material";
import { Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const Subtotal = ({subtotal, emptyCart, totalItems}) => {
    const router = useRouter();
    return (
        <Box container sx={{
            backgroundColor: '#052469', 
            borderRadius: 3, 
            marginY: 2, 
            padding: 4, 
            display: 'flex', 
            flexDirection: {xs: 'column', md: 'row'},
            justifyContent: 'space-evenly'
        }}>
             
            <Box sx={{ flexGrow: 1 }} />
                    
            <Box sx={{ margin: 'auto', paddingY: 1}}>
                <Button 
                    variant='contained' 
                    color='info'
                    size='large'
                    startIcon={<DeleteForever />}
                    onClick={() => emptyCart().then(router.reload())}
                >
                    Empty Cart
                </Button>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ margin: 'auto', paddingY: 1}}>
                <Link href='/checkout'><a>
                    <Button 
                        variant='contained'
                        size='large'
                        startIcon={<ShoppingCartCheckout />}
                    >
                        Checkout
                    </Button>
                </a></Link>
            </Box>
            
            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{display: 'flex', flexDirection:  'row'}}>
                <Box sx={{paddingX: 1, margin: 'auto', color:'white'}}>
                    <Typography variant='body1'>
                        Total Items:
                    </Typography>

                    <div align='center'>
                        <Typography variant="h5">
                            {totalItems}
                        </Typography>
                    </div>
                </Box>
                        
                <Box sx={{paddingX: 5, margin: 'auto', color:'white'}}>
                    <Typography variant='body1'>
                        Subtotal:
                    </Typography>
                    
                    <Typography variant="h5" >
                        {subtotal.formatted_with_symbol}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Subtotal;