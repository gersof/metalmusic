import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function BandCard(props) {
  const { classes,Band } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Band.PhotoURL}
          title={Band.BandName}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          {Band.BandName}
          </Typography>
          {/* <Typography component="p">
          {"¿Cuándo? "+Band.StartDateTime}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Compartir
        </Button>
        <Button size="small" color="primary">
          Ver más..
        </Button>
      </CardActions>
    </Card>
  );
}

BandCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Band: PropTypes.object.isRequired
};

export default withStyles(styles)(BandCard);
