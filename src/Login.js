import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 240,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  container: {
    marginTop: 50
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  button: {
    marginTop: 20
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"

      >
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
          >
            <h2 style={{ textAlign: 'center' }}>Iniciar sessión.</h2>
            <TextField
              id="outlined-name"
              label="Correo Electrónico"
              className={classes.textField}
              margin="normal"
              variant="standard"
              fullWidth="true"
              required="true"
            />
            <TextField
              id="outlined-name"
              label="Contraseña"
              className={classes.textField}
              margin="normal"
              variant="standard"
              fullWidth="true"
              type="password"
              required="true"
            />
            <Button variant="contained" size="large" color="default" className={classes.button} fullWidth="true">
              Entrar
                <Send className={classes.rightIcon}></Send>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
