import React, { Component } from 'react';
import * as firebase from 'firebase';
import CardEvent from "../components/CardEvent";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class ViewEvents extends Component {
    constructor(props) {
        super(props);
        //super(this.props);
        this.state = {
            Events: []
        }

    }


    componentDidMount() {
        firebase.database().ref('events').on('child_added', snapshot => {
            this.setState({
                Events: this.state.Events.concat(snapshot.val())
            });
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>Próximos eventos</h2>
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        {this.state.Events.map(event => {
                            return (
                                <Grid item xs={3}>
                                    <CardEvent Event={event} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            </div>
        );
    }

}

ViewEvents.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ViewEvents);


