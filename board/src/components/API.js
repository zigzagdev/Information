import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import {Button} from "@material-ui/core";


const baseURL = "http://127.0.0.1:8000/api/boards";


export default function API() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setBoards(response.data);
            })
    }, [])

    return (
        <div>
            <ul>
                {
                    boards.map(board => <li key={board.id}> {board.title} </li>)
                }
            </ul>
            <Button variant="contained" color="primary" disableElevation>
                <a href={"http://127.0.0.1:8000/api/boards"}>Push here</a>
            </Button>
        </div>
    );

}
