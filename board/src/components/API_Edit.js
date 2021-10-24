import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Button,Card} from "@material-ui/core";


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
const style4 = {
    lineHeight: 3,
    color: "#000080",
    background:'#00FFFF',
    textAlign: 'right',
    marginRight: 'auto',
    marginLeft: 1100,
};


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

    return (
        <Container>
          <div style={{color:"red", lineHeight:2,}}>
           <text>Here is Edit Page !!</text>
          </div>
            <Card style={style3}>
                <Card style={{type: "text", height: '90px', fontSize: '30px', marginBottom: 20}}>Name: {data.name}</Card>
                <Card style={{type: "text", height: '90px', fontSize: '30px', marginBottom: 20 }}>Title: {data.title}</Card>
                <div style={{type: "text", height: '100px', fontSize: '30px', marginBottom: 20,textAlign:'center' }}>Content: {(data.description)}</div>
            </Card>
            <button
                style={style4}
                onClick={() => history.push(`/detail?id=${data.id}`)}
            >Submit</button>
        </Container>

    );
}


// 64行目に関してはのちに行間の調整を行う。
