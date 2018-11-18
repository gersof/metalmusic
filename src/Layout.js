import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Menu from "./Menu";
import ViewEvents from "./pages/viewEvents";
import ViewBands from "./pages/viewBands";
import Home from "./Home";
import Error404 from "./Error404";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },

});

function CenteredGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <Menu />
                </Grid>
                <Grid item xs={12}>
                    <Router>
                        <Switch>
                            <Route exact path="/layout/" component={Home} />
                            <Route exact path="/layout/home" component={Home} />
                            <Route exact path="/layout/events" component={ViewEvents} />
                            <Route exact path="/layout/bands" component={ViewBands} />
                            <Route path="/**" component={Error404} />
                        </Switch>
                    </Router>
                </Grid>
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
