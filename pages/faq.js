import Head from 'next/head';
import Link from 'next/link';
import { Button, Container, Box, Typography } from '@mui/material';
import Image from 'next/image';
import FAQAccordion from '../components/Help/FAQAccordion';
import { faqitems } from '../data/faqitems';


function createFAQItem(faqitems) {
    return (
        <FAQAccordion 
            key={faqitems.id}
            question={faqitems.question}
            answer={faqitems.answer}
        />
    )
}
export default function faq(){
    return (
        <div>
            <Head>
                <title>Frequently Asked Questions</title>
            </Head>

            <Container sx={{ paddingY: 5 }}>
                <div align='center'>
                    <Typography variant='h2'>
                        Frequently Asked Questions
                    </Typography>
                </div>
                            
                <Container  sx={{ paddingTop: 5, mx: 'auto', width: { xs: '100%', md: '75%' }}}>
                    {faqitems.map(createFAQItem)}
                </Container>

            {/* <div align='center'>
                <Button variant='contained'><Link href='/store' class="nav-link">Store</Link></Button> 
            </div>
            
            <Box sx={{ position: 'static' }}>
                <Image src="/citybackground.png" alt="City Background" layout="responsive" width={1947} height={518} />
            </Box> */}
        </Container>

        
        </div>
    );
}