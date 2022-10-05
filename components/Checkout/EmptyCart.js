import { Typography, Container, Button } from "@mui/material";
import Link from "next/link";

const EmptyCart = () => {
    return (
        <div align='center'>
            <Container>
                <Typography variant='h6' gutterBottom>
                    <div>
                        Your cart is empty. Start shopping now.
                    </div>
                </Typography>

                <Link href='/store'><a>
                    <Button variant='contained'>
                        Store
                    </Button>
                </a></Link>
            </Container>
        </div>
    );
}

export default EmptyCart;