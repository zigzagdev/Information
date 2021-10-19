// here page is only show the detail Card .

import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Button,Card,Input} from "@material-ui/core";

const style = {
    minWidth: 16,
    lineHeight: 3,
    borderRadius: 8,
    border: "none",
    padding: "0 16px",
    color: "red",
    background: "black",
};

const style2 = {
    minWidth: 16,
    lineHeight: 3,
    borderRadius: 8,
    border: "none",
    padding: "0 16px",
    color: "#fff",
    background: "#639",
};

const style3 = {
    textAlign: 'center',
    marginLeft:'auto',
    marginRight:'auto',
    width: '49rem',
    height: '20rem',
    marginTop: 70,
    display: "flex",
    flexFlow: "column",
    // justifyContent: "space-between",
}


export default function Detail() {
    const [data, setData] = useState([]);
    const history = useHistory();
    const id = new URLSearchParams(history.location.search).get("id");

    useEffect(() => {
        /** URLパラメータから取得したId */
        fetch(`http://127.0.0.1:8000/api/boards/${id}`)
            .then((res) => res.json())
            .then(data => {console.log(data);
             setData(data);
            });
        }, []);

    console.log(data)

        return (
            <Container>
                    <Card style={style3}>
                        <Card style={{type: "text", height: '90px', fontSize: '30px', marginBottom: 20}}>Name: {data.name}</Card>
                        <Card style={{type: "text", height: '90px', fontSize: '30px', marginBottom: 20 }}>Title: {data.title}</Card>
                        <div style={{type: "text", height: '100px', fontSize: '30px', marginBottom: 20,textAlign:'center' }}>Content: {(data.description)}</div>
                    </Card>
            </Container>
        );
}


{/*<Button style={style2} variant="contained" color="primary" onClick={() =>  history.push(`/`)}>*/}
{/*  Return*/}
{/*</Button>*/}

