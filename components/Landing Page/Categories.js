import Category from '../Landing Page/Category'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styles from '../../styles/Home.module.css'

const Categories = () => {
    const shirts = {
        image: '/tshirt.svg',
        title: 'Shirts'
    }
    const bottoms = { 
        image: '/pants.svg', 
        title: 'Bottoms'
    }
    const hats = {
        image: '/hat.png',
        title: 'Hats'
    }
    const games = {
        image: '/game.png',
        title: 'Games'
    }
    return (
        <div align='center' className={styles.background} >
            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={3}>
                        <Category {...shirts} />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Category {...bottoms} />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Category {...hats} />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Category {...games} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Categories;