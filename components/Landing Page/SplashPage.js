import { Button, Box, Container, Typography } from "@mui/material";
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

const SplashPage = () => {
    return (
        <div className={styles.main} align='center'>
            <Box>
                <Container>
                    <Typography>
                        Welcome to
                    </Typography>
                    <Typography 
                        sx={{fontFamily: 'Sacramento'}}
                        variant="h1"
                    >
                        Johnny&apos;s
                    </Typography>
                    
                    <Link href='/store'><a>
                        <Button 
                            variant="contained" 
                            size="large"
                            sx={{ margin: 2, cursor: 'pointer' }}
                        >Store</Button>
                    </a></Link>
                    <Typography>
                        Best high end threads... or something like that
                    </Typography>
                </Container>
            </Box>

            <Image 
                src="/citybackground.png" 
                alt="City Background" 
                layout="intrinsic" 
                width={1947} 
                height={518} 
                priority
            />
        </div>
    );
}

export default SplashPage;