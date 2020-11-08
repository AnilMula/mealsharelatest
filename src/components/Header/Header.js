import React from 'react';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'white',
  },
});
function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Button color="inherit">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Button>

        <Button color="inherit">
          <Link to="/meals" className={classes.link}>
            Meals
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/reservations" className={classes.link}>
            Reservations
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/reviews" className={classes.link}>
            Reviews
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
