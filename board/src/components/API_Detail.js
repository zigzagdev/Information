import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

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

export default function Edit() {
    const [board, setBoard] = useState([]);
    const history = useHistory();

    useEffect(() => {
        /** URLパラメータから取得したId */
        const id = new URLSearchParams(history.location.search).get("id");

        fetch(`http://127.0.0.1:8000/api/boards/${id}`)
            .then((res) => res.json())
            .then((data) => setBoard(data));
    }, []);

    return (
        <div key={board.id}>
            {board.title}
            <Container>
                <Grid container spacing={6}>
                    <Grid item md={12}>
                        <Paper key={board.title}>
                            <Button style={style2} variant="contained" color="primary" onClick={() =>  history.push(`/`)}>
                                Return
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
