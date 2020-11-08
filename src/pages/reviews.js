import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import { Typography } from '@material-ui/core';

function reviews() {
  return (
    <div>
      <Header></Header>
      <Typography variant="h4" align="center">
        All reviews
      </Typography>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
}

export default reviews;
