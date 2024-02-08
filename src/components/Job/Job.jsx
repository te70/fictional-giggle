import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { DataGrid } from '@mui/x-data-grid';
import BasicTable from './Table';

  
function Job() {
  return (
    <div>
        <Header/>
        <section className='r-wrapper'>
            <div className='innerWidth r-container'>
                <div className='r-head flexColCenter'>
                    <span className='primaryText paddings'>Jobs</span>
                        <BasicTable/>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Job