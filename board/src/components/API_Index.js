import React,{ useState,useEffect } from 'react';
import {Button,Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {Container} from "@material-ui/core";


export default function API_Index() {
    const [boards, setBoards] = useState([]);

    useEffect(()=> {
        fetch('http://127.0.0.1:8000/api/boards')
            .then(res => res.json())
            .then(data => setBoards(data))
    },[])

    return (
        <div>
            {boards.map(board => (
                <p key={board.id}>{board.description}
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={3} md={6}>
                                <Paper>{board.title}</Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </p>
            ))}
        </div>

    );

}


//フロント側にてクエリを取得したい場合は基本的にサーバー・フロント双方を繋いだ状態でないと取得が出来ない。
// また、 フロントのmap機能は複数からの単数出力が多い。
