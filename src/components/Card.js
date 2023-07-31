import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    backgroundColor:'grey',

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          USER
        </Typography>
        <Typography variant="h5" component="h2">
          DARSHAN
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          student
        </Typography>
        <Typography variant="body2" component="p">
          lorem ipsum dolor sit amet
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' color='primary'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
