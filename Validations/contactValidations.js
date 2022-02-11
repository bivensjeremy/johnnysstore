import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Invalid email'),
    phone: Yup.number().required('Phone Number Required'),
    message: Yup.string().required("Don't forget to write your message"),
})