import { Container, Typography } from '@mui/material';

const MessageSuccess = () => {
    return (
        <div align='center'>
            <Container>
                <Typography variant='h5'>
                    Message sent!
                </Typography>
            </Container>
        </div>
    );
}

export default MessageSuccess;