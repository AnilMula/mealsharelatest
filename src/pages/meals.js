import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Meals from '../components/Meals';
import { Typography } from '@material-ui/core';

function meals() {
  return (
    <div>
      <Header></Header>
      <Typography variant="h4" align="center">
        All Meals
      </Typography>
      <Meals></Meals>
      <Footer></Footer>
    </div>
  );
}

export default meals;
