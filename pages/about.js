import Head from 'next/head';
import Link from 'next/link';
import { Button, Container, Box, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import AboutComp from '../components/About/AboutComp';
import { aboutitems } from '../data/aboutitems'

function createAboutCompCard(aboutitems) {
    return(
        <AboutComp 
            key={aboutitems.id}
            id={aboutitems.id}
            header={aboutitems.header}
            content={aboutitems.content}
        />
    )
}

const about = () => {
    return (
        <div>
            <Head>
                <title>About | Johnny{`'`}s</title>
            </Head>

            <Container sx={{ paddingTop: 5 }}>
                <div align='center'>
                    <Typography variant='h2'>
                        About Johnny{`'`}s
                    </Typography>
                </div>
                            
                <Container sx={{ paddingTop: 5, mx: 'auto', width: { xs: '100%', md: '75%' }}}>
                    {aboutitems.map(createAboutCompCard)}
                </Container>

                <div align='center'>
                    <Link href='/store'><a>
                        <Button 
                            variant="contained" 
                            size="large"
                            sx={{ margin: 2 }}
                        >Store</Button>
                    </a></Link>
                </div>
            </Container>
            <Box sx={{ position: 'static' }}>
                <Image src="/citybackground.png" alt="City Background" layout="responsive" width={1947} height={518} />
            </Box>
        

        
        </div>
    );
}

export default about;