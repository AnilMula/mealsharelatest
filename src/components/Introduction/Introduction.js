import React from 'react';
import { Typography } from '@material-ui/core';
import IntroductionText from '../IntroductuonText';

function Introduction() {
  return (
    <div>
      <Typography variant="h4" component="h6" align="center">
        Home cooked meals
      </Typography>

      <IntroductionText></IntroductionText>
    </div>
  );
}

export default Introduction;
