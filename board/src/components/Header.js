import React from 'react';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    header: {
        color: "orange",
        backgroundColor: "#0f2350",
        width: "100%",
        position: "absolute"
    },
});

const Header = () => {
    const classes = useStyles();
    return <div className={classes.header}>Header</div>
};

export default Header;
