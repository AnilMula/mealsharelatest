import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import src1 from '../../static/images/food1.jpg';
import src2 from '../../static/images/food2.jpg';
import src3 from '../../static/images/food3.jpg';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
  centerBoxText: {
    width: '50 px',
    height: '100 px',
    textAlign: 'center',
  },
});

export default function IntroductionText() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          we love food
        </Typography>
        <Typography className={classes.centerBoxText}>
          We find the best home cooks around the world so you can immerse
          yourself in meaningful food experiences and cultural traditions passed
          down through generations. Connect with local culture through food.
          Visit a grandmother in her kitchen in India and learn how to make
          crisp dosas or spend time on a farm in Northern Thailand and grind
          curry pastes, and experience how local people live. Choose from three
          unique experiences with our hosts, or pick a combination:
        </Typography>
      </CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        <img src={src1} alt="food menu"></img>
        <span></span>
        <img src={src2} alt="food menu"></img>
        <img src={src3} alt="food menu"></img>
      </Typography>
    </Card>
  );
}
