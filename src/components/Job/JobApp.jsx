import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
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
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
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
  cv: yup
    .string('Upload your resume')
    .required('Resume is required'),
});

function JobApp() {
  const [successMessage, setSuccessMessage] = useState('');
  const [failMessage, setFailMessage] = useState('');
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();

  const handleFailMessage = () => {
    setFailMessage('Failed to upload');
  }

  const handleUploadSuccess = () => {
    setSuccessMessage('Uploaded successfully');

  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
    </React.Fragment>
  );


  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name:'',
      phone_number:'',
      location:'',
      email:'',
      cv: '',
      id: id
    },
    validationSchema: validationSchema,
    onSubmit: async (values, {resetForm}) => {

      try {
        const formData = new FormData();
        formData.append('first_name', values.first_name);
        formData.append('last_name', values.last_name);
        formData.append('email', values.email);
        formData.append('phone_number', values.phone_number);
        formData.append('location', values.location);
        formData.append('id', values.id);
        formData.append('cv', values.cv[0]);
        const response = await axios.post('http://127.0.0.1:8000/api/resume/store', formData);
        console.log(response.data);
        handleUploadSuccess();
        resetForm();
      } catch(error) {
        console.log(error);
        handleFailMessage();
      }
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
        <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message='note'
          action={action}
        />
        {successMessage && <p>{successMessage}</p>}</div>
        <div>{failMessage && <p>{failMessage}</p>}</div>
        <div className='flexColCenter'>
          <Box width="50%">
            <Card variant='outlined' sx={{ minWidth: 275 }}>
              <CardContent>
                <form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
                  {/* <Grid container spacing={2}> */}
                  {/* <Grid item xs={6}> */}
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
                    {/* </Grid> */}
                    {/* <Grid item xs={6}> */}
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
                    {/* </Grid> */}
                    {/* </Grid> */}
                    {/* <Grid container spacing={2}> */}
                  {/* <Grid item xs={6}> */}
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
                    {/* </Grid> */}
                    {/* <Grid item xs={6}> */}
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
                    {/* </Grid> */}
                    {/* </Grid> */}
                    {/* <Grid container spacing={2}> */}
                  {/* <Grid item xs={6}> */}
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
                    {/* </Grid> */}
                    {/* {/* <Grid item xs={6}> */}
                    <input placeholder='Upload Cv' id="cv" name="cv" type="file" accept="application/pdf" onBlur={formik.handleBlur} />
                    {/* </Grid> */}
                    {/* </Grid> */}
                  <Button type="submit" color="success" fullWidth variant='contained' margin="dense">
                    Submit
                  </Button>
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

export default JobApp