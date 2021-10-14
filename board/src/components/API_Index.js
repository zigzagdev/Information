import React,{ useState,useEffect } from 'react';
import {Button,Box,Card,Typography} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const style ={
    display: 'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
    marginLeft: 7,
    paddingTop:25,
    cursor:'pointer',

}


const style2 = {
    textAlign: 'center',
    marginLeft:20,
    marginRight: 20,
    width: '18rem',
    height: '18rem',
    marginTop: 40,
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
}


const style3 = {
    lineHeight: 3,
    color: "#000080",
    background:'#00FFFF',
    margin: '0 auto 40px',
    display: 'flex',
};

const style4 ={
    marginTop: 20,
    color: 'red',

}



export default function API_Index() {
    const [boards, setBoards] = useState([]);
    const history = useHistory();

    useEffect(()=> {
        fetch('http://127.0.0.1:8000/api/boards')
            .then(res => res.json())
            .then(data => setBoards(data))
    },[])

    return (
        <Box style={style}>
            {boards.map(board => (
              <Card style={style2}>
                <Typography style={style4}>
                  {board.title}
                </Typography>
                <Typography>
                  {board.description}
                </Typography>
                  <Button
                      style={style3}
                      onClick={() => history.push(`/detail?id=${board.id}`)}
                    >
                      Jump
                    </Button>
                </Card>
            ))}
        </Box>
    );

}


//フロント側にてクエリを取得したい場合は基本的にサーバー・フロント双方を繋いだ状態でないと取得が出来ない。
// また、 フロントのmap機能は複数からの単数出力が多い。
