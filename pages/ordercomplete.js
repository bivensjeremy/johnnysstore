import { Button, Container, Typography, Card, Box } from '@mui/material';
import styles from '../styles/Home.module.css'
import Head from "next/head";
import Link from 'next/link';

const OrderComplete = () => {

    return (
        <div >
            <Head>
                <title>Johnny{`'`}s | Order Confirmed</title>
            </Head>

            <div className={styles.center} align='center'>
                <Container>
                {/* <Box sx={{ 
                    width: 500, 
                    height: 500,
                    backgroundColor: 'primary',
                    border: 1, 
                    // paddingX: 2, 
                    paddingY: 2,
                    borderRadius: 4,
                    borderColor: 'red', 
                    position: 'relative'
                    }}
                    variant="outlined" 
                > */}
                    
                    <Typography gutterBottom>
                        Thank you for shopping with
                    </Typography>
                    <Typography 
                        sx={{fontFamily: 'Sacramento', paddingBottom: 4 }}
                        variant="h2"
                    >
                        Johnny&apos;s.
                    </Typography>

                    <Typography variant='h5'>
                        Your Order is Confirmed.
                    </Typography>

                    <Link href='/'><a>
                        <Button 
                            variant="contained"
                            sx={{ margin: 2 }}
                        >Home</Button>
                    </a></Link>
                   
                  {/* </Box>   */}
                </Container>
            </div>
        </div>

        
    );
}

export default OrderComplete;