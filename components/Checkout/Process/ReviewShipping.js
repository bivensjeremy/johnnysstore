import { Typography } from "@mui/material";

const ReviewShipping = ({formik}) => {
    
    return (
        <div>
            <Typography variant='h5'>
                {formik.name}
            </Typography>

            <Typography variant='h6'>
                {formik.email}
            </Typography>

            <Typography variant='h6'>
                {formik.street}
            </Typography>

            <Typography variant='h6'>
                {formik.city}, {formik.state} {formik.zip}
            </Typography>
        </div>
    );
}

export default ReviewShipping;