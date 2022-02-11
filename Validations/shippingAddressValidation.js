import * as Yup from 'yup';

export const shippingAddressValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Invalid email'),
    street: Yup.string().required('Street address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().required('Zip Code is required'),
    phone: Yup.number().required('Phone Number Required'),
})