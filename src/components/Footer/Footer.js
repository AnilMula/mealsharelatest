import React from 'react';
import { AppBar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="default">
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        copyright @anilkumar mula
      </Typography>
    </AppBar>
  );
}

export default Footer;
