import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import { State }  from 'country-state-city';


const Shipping = ({formik}) => {
    const states = State.getStatesOfCountry('US')
    return (
        <Grid container marginX='auto' sx={{ width: { xs: '100%', md: '75%' }, paddingTop: 3 }}>
            <Grid item xs={12} sx={{ padding: 1 }}>
                <Typography variant='body1'>
                    Full Name
                </Typography>

                <TextField
                    fullWidth
                    variant='outlined'
                    size='small'
                    id="name"
                    name="name"
                    label='Name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={6} sx={{ padding: 1 }}>
                <Typography variant='body1'>
                    Email Address
                </Typography>

                <TextField
                    fullWidth
                    variant='outlined'
                    size='small'
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={6} sx={{ padding: 1 }}>
                <Typography variant='body1'>
                    Phone Number
                </Typography>

                <TextField
                    fullWidth
                    variant='outlined'
                    size='small'
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} sx={{ padding: 1 }}>
                <Typography variant='body1'>
                    Street Address
                </Typography>

                <TextField
                    fullWidth
                    variant='outlined'
                    size='small'
                    id="street"
                    name="street"
                    label='Street'
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    error={formik.touched.street && Boolean(formik.errors.street)}
                    helperText={formik.touched.street && formik.errors.street}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={4} sx={{ paddingX: 1 }}>
                <Typography variant='body1'>
                    City
                </Typography>

                <TextField
                    fullWidth
                    variant='outlined'
                    size='small'
                    id="city"
                    name="city"
                    label='City'
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    onBlur={formik.handleBlur}
                />
            </Grid>

            <Grid item xs={12} md={4} sx={{ paddingX: 1 }}>
                <Typography variant='body1'>
                    State
                </Typography>

                <TextField
                    sx={{ backgroundColor: 'white', borderRadius: 1}}
                    fullWidth
                    select
                    variant='outlined'
                    size='small'
                    id="state"
                    name="state"
                    label='State'
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                    onBlur={formik.handleBlur}
                >
                    {states.map((states) => (
                        <MenuItem key={states.isoCode} value={states.isoCode}>
                            {states.name}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={12} md={4} sx={{ paddingX: 1 }}>
                <Typography variant='body1'>
                    Zip Code
                </Typography>

                <TextField
                    fullWidth
                    variant='outlined'
                    size='small'
                    id="zip"
                    name="zip"
                    label='Zip'
                    value={formik.values.zip}
                    onChange={formik.handleChange}
                    error={formik.touched.zip && Boolean(formik.errors.zip)}
                    helperText={formik.touched.zip && formik.errors.zip}
                    onBlur={formik.handleBlur}
                />
            </Grid>
        </Grid>           
    );
}

export default Shipping;