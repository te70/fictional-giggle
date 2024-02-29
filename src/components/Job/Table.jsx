import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Link } from 'react-router-dom';

function createData(job_title, job_type, job_location, id, created_at) {
  return { job_title, job_type, job_location, id, created_at };
}

export default function BasicTable() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/jobs');
                setRows(response.data);
            } catch(e) {
                console.log(e);
            }
        };
        fetchData();
    }, [])
  return (
    <TableContainer component={Paper} style={{width: '80%'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Job title</TableCell>
            <TableCell align="right">Job type</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Job ID</TableCell>
            <TableCell align="right">Published date</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows && rows.length > 0 ? (
          rows.map((row) => (
            <TableRow
              key={row.job_title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/jobs/${row.id}`}>{row.job_title}</Link>
              </TableCell>
              <TableCell align="right">{row.job_type}</TableCell>
              <TableCell align="right">{row.job_location}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
            </TableRow>
          ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">No jobs available</TableCell>
            </TableRow>
          )} 
        </TableBody>
      </Table>
    </TableContainer>
  );
}