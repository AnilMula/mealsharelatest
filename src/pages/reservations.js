import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Reservations from '../components/Reservations';
import { Typography } from '@material-ui/core';

function reservations() {
  return (
    <div>
      <Header></Header>

      <Typography variant="h4" align="center">
        All Reservations
      </Typography>
      <Reservations></Reservations>
      <Footer></Footer>
    </div>
  );
}

export default reservations;
