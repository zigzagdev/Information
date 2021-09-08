import React,{ useState,useEffect } from 'react';
import axios from 'axios';


const baseURL = "http://127.0.0.1:8000/api/boards";


export default function App() {
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
                    boards.map(board => <li key={board.id}> {board.title}{board.name}{board.description} </li>)
                }
            </ul>
        </div>
    );

}
