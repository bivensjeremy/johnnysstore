import { CircularProgress, Grid, Typography, Button, TextField, Box } from '@mui/material';
import { Send } from '@material-ui/icons';

export default function ContactMeForm({ formik }) {
    return (
            <form onSubmit={formik.handleSubmit}>
                <Grid container marginX='auto' sx={{ width: { xs: '100%', md: '75%' } }}>
                     <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <Typography variant='body1'>
                            Name
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

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <Typography variant='body1'>
                            Email
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

                    <Grid item xs={12} sx={{ p: 1 }}>
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

                    <Grid item xs={12} sx={{ p: 1 }}>
                        <Typography variant='body1'>
                            Message
                        </Typography>

                        <TextField
                            fullWidth
                            variant='outlined'
                            id="message"
                            label="Message"
                            multiline
                            rows={10}
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            error={formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.message && formik.errors.message}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Box>
                        <Button 
                            variant="contained" 
                            type="submit" 
                            endIcon={formik.isSubmitting ? '' : <Send /> }
                            disabled={formik.isSubmitting}
                        >
                            { formik.isSubmitting ? <CircularProgress size={24} /> : 'Send' }
                        </Button>
                    </Box>
                </Grid>
            </form>
    );
};