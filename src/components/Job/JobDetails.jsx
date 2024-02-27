import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Card, CardContent, CardHeader, Typography, Box, Grid, CardActions, Button } from '@mui/material';
import './Job.css';

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.post(`http://127.0.0.1:8000/api/jobs/${id}`);
              console.log(response.data);
              setJob(response.data);
          } catch(e) {
              console.log(e);
          }
      };
      fetchData();
  }, []);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Header/>
        <section className='r-wrapper'>
            <div className='innerWidth r-container paddings'>
                <div className='r-head flexColCenter'>
                    <span className='primaryText jobDetails'>Job details</span>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Box width="100%">
                                <Card variant="outlined" className="card" sx={{minWidth: 275}}>
                                    <CardHeader className='jobTitle' title={job.job_title}/>
                                        <CardContent>
                                            <Typography variant="h6" color="text.secondary"><span>Job location:</span> {job.job_location}</Typography>
                                            <Typography variant="h6" color="text.secondary"><span>Job Salary:</span> {job.salary}</Typography>
                                            <Typography variant="h6" color="text.secondary"><span>Contact name:</span> {job.contact_name}</Typography>
                                            <Typography variant="h6" color="text.secondary"><span>Contact email:</span> {job.contact_email}</Typography>
                                        </CardContent>
                                </Card>
                            </Box>
                            <Box width="100%" gap={2}>
                                <Card variant="outlined" className="card" sx={{minWidth: 275}}>
                                        <CardContent>
                                            <Typography variant="h5" color="text.secondary">Job requirements</Typography>
                                            <Typography variant="body2" color="text.secondary">{job.job_requirements}</Typography>
                                            <Typography variant="h5" color="text.secondary">Job responsibilities</Typography>
                                            <Typography variant="body2" color="text.secondary">{job.job_responsibilities}</Typography>
                                        </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box width="100%" gap={2}>
                                <Card variant="none" sx={{minWidth: 275}}>
                                    <CardActions className='flexColCenter'>
                                        <Button size="large" fullWidth variant="contained" color="success" margin="dense" href={`/jobs/cv/${job.id}`} >I'M INTERESTED</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </div>
      </section>
      <Footer/>
    </div>
  );
}

export default JobDetails;
