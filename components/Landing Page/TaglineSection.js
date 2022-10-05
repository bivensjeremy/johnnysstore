import { Box, Container, Typography } from "@mui/material";

const TaglineSection = () => {
    return (
        <Container sx={{ padding: 10 }}>
            <Typography
                variant="h2"
                align="center"
                sx={{ fontFamily: 'Sacramento' }}
            >
                Best in Fashion!
            </Typography>

            <Box sx={{ mx: 'auto', width: '15%', border: 'none', borderTop: '5px dotted', marginY: 2 }} />
            
            <Box sx={{ width: {sm: '100%', md: '50%'}, mx: 'auto' }}>
                <Typography
                    variant="body1"
                    align="center"
                >
                    Hop in the time machine & shop the finest clothing on the internet! Yes, its a bunch of junk, but so what?!
                </Typography>
            </Box>
        </Container>
    );
}

export default TaglineSection;