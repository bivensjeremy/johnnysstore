import { useState } from "react";
import { Container, Typography } from "@mui/material";
import Head from "next/head";
import ContactMeForm from "../components/Help/ContactMe/ContactMeForm";
import { useFormik } from 'formik';
import { contactValidationSchema } from "../Validations/contactValidations";
import MessageSuccess from "../components/Help/ContactMe/MessageSuccess";

const Contact = () => {
    const [submitSuccess, setSuccess] = useState('');

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        validationSchema: contactValidationSchema,
        onSubmit: async(values) => {
            // console.log(JSON.stringify(values, null, 2));
            await new Promise((r) => setTimeout(r, 500));
            const response = await fetch("/api/contactapi", { 
                method: 'POST', 
                headers: { 
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }, 
                body: JSON.stringify(values) 
            });
            const resData = await response.json();
            if (resData.status === 'success'){
                setSuccess(true)
            }else if(resData.status === 'fail'){
                alert("Message failed to send.")
            }
        },
    });

    return (
        <div>
            <Head>
                <title>Contact | Johnny{`'`}s </title>
            </Head>

            <Container sx={{ paddingTop: 5 }}>
                <div align='center'>
                    <Typography variant='h2'>
                        Contact Me
                    </Typography>
                </div>
                            
                <Container sx={{ paddingY: 5, mx: 'auto' }}>
                    { submitSuccess ? <MessageSuccess /> : <ContactMeForm formik={formik} /> }
                </Container>
            </Container>
        </div>
    );
}

export default Contact;