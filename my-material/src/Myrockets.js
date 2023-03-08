import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import './index.scss';
import { Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import {CardActions } from '@mui/material';


const Myrocket = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('flight_number');
  const [order, setOrder] = useState('asc');

  useEffect(()=>{
    const fetchLaunches = async () =>{
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://api.spacexdata.com/v3/launches${
            filter !== "all" ? `/${filter}` : ""
          }?limit=${perPage}&offset=${(currentPage - 1) * perPage}&sort=${sort}&order=${order}`
        );
        setLaunches(response.data);
        setLoading(false);
      }
      catch{
        setError(error.message);
        setLoading(false);
      }
    }
    fetchLaunches();
  },[currentPage, perPage, filter, sort, order]);

  const totalPages = Math.ceil(100/perPage);
  const pageNumbers = Array.from(Array(totalPages).keys()).map(n => n + 1);

  const handlePageClick = (pageNumber) =>{
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      {error && <p>{error}</p>} 
      {!loading && !error && (
    <>
         <div className='header'>
         <label htmlFor="per-page">Per Page:</label>
          <select
            id="per-page"
            value={perPage}
            onChange={(e) => setPerPage(parseInt(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
          </select>

            <label htmlFor="filter">Filter:</label>
            <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="past">Past</option>
              <option value="upcoming">Upcoming</option>
            </select>
         
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="flight_number">Flight Number</option>
              <option value="mission_name">Mission Name</option>
              <option value="launch_year">Launch Year</option>
            </select>
            
            <label htmlFor="order">Order:</label>
            <select id="order" value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          

    <div className='container'>
            <h1>ROCKETS</h1>
      <Container className='container-card'>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            {launches.map((value,index)=>{ 
              return(
                  <Grid key={index} xs={6} md={6}>
                  <Card sx={{ maxWidth: 345 }} className='cards'>
                  <Typography gutterBottom variant="h4" component="div">
                       {value.mission_name}
                  </Typography>
               <CardMedia
                  component="img"
                  
                  image= {value.links.mission_patch}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                       {value.details}
                  </Typography>
                </CardContent>
              <CardActions>
              <Link href={value.links.wikipedia} target="_blank" className='wikipedia'>
                     Wikipedia
              </Link>
              </CardActions>
            </Card>
         </Grid>
           )
            })}
          </Grid>
      </Container>
    </div>

    <div className='button-section'>
        <Stack spacing={2} direction="row">
          {pageNumbers.map((pageNumber)=> (
             <Button variant="contained" 
             key={pageNumber}
             onClick={()=>handlePageClick(pageNumber)}
             disabled={pageNumber === currentPage}
             >
              {pageNumber}
             </Button>
          )
            )}
        </Stack>
    </div>
    </>
    )}
    </div>
  )
}

export default Myrocket