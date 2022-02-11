import { Container, Grid } from "@mui/material";
import KeyItemsCard from "./KeyItemsCard";
import { keyitems } from "../../data/keyitems";

function createKeyItemsCard(keyItems) {
    return (
        <KeyItemsCard
            key={keyItems.id}
            name={keyItems.name}
            image={keyItems.image}
            description={keyItems.description}
        />
    )
}
const KeyItemsSection = () => {
    return (
        <div align='center'>
        <Container>
            <Grid container>
                {keyitems.map(createKeyItemsCard)}
            </Grid>
        </Container>
            
        </div>
    );
}

export default KeyItemsSection;