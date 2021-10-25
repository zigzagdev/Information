import React from "react";
import {Link} from "@material-ui/core";


const style ={
    display: "flex",
    flexDirection: 'column',
    marginLeft: 1150,
    marginTop: 70,
}
const style2 = {
    position: "absolute",
    display: "block",
    flexDirection: 'column',
    marginLeft: 1150,
    marginTop: 20,
}

const back = {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    background: 'gray',
    height: '170px',
}

const style3 = {
    marginBottom: 9,
    color: "white",
}

const Footer = () => {
    return (
        <div style={back}>
          <h1 style={style2}>About Us</h1>
            <ul style={style}>
              <Link href="#" style={style3}>Aim</Link>
              <Link href="#" style={style3}>Vision</Link>
              <Link href="#" style={style3}>Testimonials</Link>
            </ul>
        </div>
    );
};
export default Footer;
