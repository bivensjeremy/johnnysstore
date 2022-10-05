import { Container, Typography } from "@mui/material";
import Head from "next/head";

const donate = () => {
    return (
        <div>
            <Head>
                <title>Donate</title>
            </Head>

            <Container sx={{ paddingTop: 5 }}>
                <div align='center'>
                    <Typography variant='h2'>
                        Donate
                    </Typography>

                    <Typography variant='body1'>
                        Not looking to purchase anything but want to support the cause? Use this page to show your support!
                    </Typography>
                
                            
                    <Container sx={{ paddingY: 5, mx: 'auto' }}>
                        Coming Soon...
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default donate;