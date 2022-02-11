import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FAQAccordion = ({question, answer}) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color: '#F5F5F5'}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{backgroundColor: '#5b709f', borderRadius: 1}}
            >
                <Typography variant='h6' color="#F5F5F5">
                    {question}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography fontWeight={700}>
                    {answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default FAQAccordion;