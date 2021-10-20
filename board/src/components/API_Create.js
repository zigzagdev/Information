import React, { useEffect, useState } from "react";
import { useHistory,Link } from "react-router-dom";
import axios from "axios";
import {Button, Card, Container} from "@material-ui/core";
import {lightGreen} from "@material-ui/core/colors";

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

function API_Create () {
    const history = useHistory()
    const [board, setBoard] = useState({
        title: "",
        name: "",
        description: "",
    });

    const handleInput = (e) => {
        e.persist();
        setBoard({...board, [e.target.name]: e.target.value})
    }
    const saveBoard = (e) => {
        e.preventDefault();

        const data = {
            title: board.title,
            name: board.name,
            description: board.description
        }

        axios.post('http://127.0.0.1:8000/api/boards', data)
            .then(response => {
                if (response.data.status == 201) {
                    console.log('Post was created successfully in FrontScreen !', response.data);
                    setBoard({
                        title: "",
                        name: "",
                        description: ""
                    });
                    history.push('/');
                } else {
                    setBoard({...board, error_list: response.data.validate_err});
                }
            });
    }
  return(
      <form onSubmit={saveBoard}>
        <Container>
          <Card style={style3}>
            <div style={{textAlign:'left', marginLeft:'11px',marginTop:20,}}>
              <label>Author Name</label>
                <input type="text" name="name" style={{display:'flex',marginTop:8,width:260,height:30}} onChange={handleInput} placeholder={'sample'}/>
                  <span className="text-danger" style={{color:'red'}}>{board.title}</span>
            </div>
              {/*<Card style={{type: "text", height: '90px', fontSize: '30px', marginBottom: 20 }}>Title: {data.title}</Card>*/}
          {/*  <div style={{type: "text", height: '100px', fontSize: '30px', marginBottom: 20,textAlign:'center' }}>Content: {(data.description)}</div>*/}
          </Card>
        {/*<Button*/}
        {/*    style={style4}*/}
        {/*    onClick={() => history.push(`/edit?id=${data.id}`)}*/}
        {/*>Edit</Button>*/}
    </Container>
</form>
  );
}

export default API_Create;



