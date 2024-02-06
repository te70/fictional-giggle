import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Upload from './Upload';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  resume: yup
    .string('Enter your resume')
    .required('Resume is required'),
  first_name: yup
    .string('Enter your First name')
    .required('First name is required'),
  last_name: yup
    .string('Enter your Last name')
    .required('Last name is required'),
  phone_number: yup
    .string('Enter your Phone number')
    .required('Phone number is required'),
  location: yup
    .string('Enter your Location')
    .required('Location is required'),
});

function Form() {
  const formik = useFormik({
    initialValues: {
      first_name: 'First name',
      last_name:'Last name',
      phone_number:'0710400500',
      location:'Location',
      email: 'foobar@example.com',
      password: 'foobar',
      resume: 'resume.pdf'
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
    <Header/>
    <section className='r-wrapper'>
      <div className='innerWidth r-container'>
        <div className="r-head flexColCenter">
          <span className='primaryText'>Submit Cv</span>
        </div>
        <div className='flexColCenter'>
          <Box width="50%">
            <Card variant='outlined' sx={{ minWidth: 275 }}>
              <CardContent>
              
            <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="first_name"
                name="first_name"
                label="First name"
                margin="dense"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
              />
              </Grid>
              <Grid item xs={6}>
              <TextField
                fullWidth
                id="last_name"
                name="last_name"
                label="Last name"
                type="text"
                margin="dense"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
              </Grid>
              </Grid>
              <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                margin="dense"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              </Grid>
              <Grid item xs={6}>
              <TextField
                fullWidth
                id="phone_number"
                name="phone_number"
                label="Phone number"
                type="telephone"
                margin="dense"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
                helperText={formik.touched.phone_number && formik.errors.phone_number}
              />
              </Grid>
              </Grid>
              <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="location"
                name="location"
                label="Location"
                margin="dense"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
              />
              </Grid>
              <Grid item xs={6}>
              <input placeholder='Upload Cv' id="file" name="file" type="file" onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0]);
              }} />
              </Grid>
              <Button color="success" variant="contained" margin="dense" fullWidth type="submit">
                Submit
              </Button>
              </Grid>
            </form>
            </CardContent>
            </Card>
          </Box>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Form