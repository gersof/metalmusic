import React, { Component } from 'react';
import * as firebase from 'firebase';
import CardBand from "../components/CardBand";
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

class ViewBands extends Component {
    constructor(props) {
        super(props);
        //super(this.props);
        this.state = {
            Bands: []
        }

    }


    componentDidMount() {
        try{
            firebase.database().ref('bands').on('child_added', snapshot => {
                this.setState({
                    Bands: this.state.Bands.concat(snapshot.val())
                });
            });
        }catch(ex){
            alert('error');
        }
        
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>Bandas</h2>
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        {this.state.Bands.map(band => {
                            return (
                                <Grid item xs={3}>
                                    <CardBand Band={band} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            </div>
        );
    }

}

ViewBands.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ViewBands);


