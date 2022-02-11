import { Box, TextField, Typography, Button } from "@mui/material";
import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, PaymentElement, useStripe } from "@stripe/react-stripe-js";

const options = {
    style: {
      base: {
            iconColor: '#c4f0ff',
            fontFamily: '"Quicksand", Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
        },
        complete: {
            color: 'green',
        }
    },
  };

const Payment = () => {
    return (
        <Box container marginX='auto' sx={{ width: { xs: '100%', md: '75%' }, paddingTop: 3 }}>

            <Box  sx={{ padding: 1 }}>
                <Typography variant='body1'>
                    Card Information
                </Typography>
                

                <Box sx={{  display: 'flex', flexDirection: {xs: 'column', md: 'row'} }}>
                    <Box sx={{ 
                        width: '100%', 
                        padding: 2, 
                        margin: 1, 
                        border: '1px solid grey', 
                        borderRadius: 1, 
                        backgroundColor: 'white' 
                    }}>
                        <CardNumberElement options={options}/>
                    </Box>

                    <Box sx={{ 
                        width: {xs: '100%', md: '25%'},
                        padding: 2, 
                        margin: 1,
                        border: '1px solid grey', 
                        borderRadius: 1, 
                        backgroundColor: 'white',
                    }}>
                        <CardExpiryElement options={options} />
                    </Box>

                    <Box sx={{ 
                        width: {xs: '100%', md: '25%'},
                        padding: 2, 
                        margin: 1,
                        border: '1px solid grey', 
                        borderRadius: 1, 
                        backgroundColor: 'white' ,
                    }}>
                        <CardCvcElement options={options} />
                    </Box>
                </Box>
                {/* <PaymentElement /> */}
            </Box>

            {/* <div align='center'>
                <Box sx={{ paddingTop: 3, fontStyle: 'italic' }}>
                    <Typography variant='body2'>
                        You will have the chance to review before submitting.
                    </Typography>
                </Box>  
            </div> */}
            
       
        </Box>   
    );
}

export default Payment;