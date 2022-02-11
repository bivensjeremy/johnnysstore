import { Box, Typography } from "@mui/material";

const AboutComp = (aboutitems) => {
    return (
        <div>
            <Typography variant='h4' gutterBottom>
                {aboutitems.header}
            </Typography>

            <Typography variant='body'>
                {aboutitems.content}
            </Typography>

            {parseInt(aboutitems.id) < 3 ? <Box sx={{ mx: 'auto', width: '20%', border: 'none', borderTop: '5px dotted', marginY: 2 }} /> : <></>}
             
        </div>   
    );
}

export default AboutComp;