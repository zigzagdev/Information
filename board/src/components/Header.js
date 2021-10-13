import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const style = {
     color:"white",
     marginLeft: "1000px"
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" style={{textAlign:"left",float:"left"}}>
                        About the new news !
                    </Typography>
                    <Link to="/create"
                    style= {style}
                    >
                      Create
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
