import React from 'react';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    footer: {
        color: "yellow",
        backgroundColor: "#0f2350",
        height: "85px",
        width: "100%",
        position: "absolute",
        bottom: 0
    },
});

const Footer = () => {
    const classes = useStyles();
    return <div className={classes.footer}>Footer</div>
};

export default Footer;
