import { Container, Typography } from '@mui/material';
import FeaturedItem from './FeaturedItem';

const FeaturedSection = ({ products }) => {
    const rand = Math.floor(Math.random() * products.length)
    return (
        <div align='center'>
            <Container sx={{ paddingBottom: 10 }}>
                <Typography variant="h3" component="div" gutterBottom>
                    Featured Item
                </Typography>

                <FeaturedItem products={products[rand]}/>

            </Container>
        </div>
    );
}

export default FeaturedSection;