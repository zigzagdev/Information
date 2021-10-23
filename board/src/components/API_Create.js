import React, { useEffect, useState } from "react";
import { useHistory,Link } from "react-router-dom";
import axios from "axios";
import {Button, Card, Container} from "@material-ui/core";


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

    paddingRight:20,
    paddingLeft:20,
    color: "#000080",
    background:'#00FFFF',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 1100,
};

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
    const saveHere = (e) => {
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
                        title: ' ',
                        name: ' ',
                        description: ' '
                    });
                    history.push('/');
                } else {
                    setBoard({...board, error_list: response.data.validate_err});
                }
            });
    }
  return(
      <form onSubmit={saveHere}>
        <Container>
          <Card style={style3}>
            <div style={{textAlign:'left', marginLeft:'11px',marginTop:36,}}>
              <label style={{fontFamily:'Arial',color:'gray'}}>Author Name</label>
                <input type="text" name="name" style={{display:'flex',marginTop:8,marginBottom:19,width:260,height:30}} onChange={handleInput} placeholder={'sample'}/>
              <label style={{fontFamily:'Arial',color:'blue',marginBottom: 20}}>News Title</label>
                <input type="text" name="name" style={{display:'flex',marginTop:8,width:260,height:30}} onChange={handleInput} placeholder={'sample'}/>
              <label style={{fontFamily:'Arial',color:'red',paddingTop:25,display:'flex'}}>Content</label>
                <input type="textarea" name="name" style={{display:'flex',width:260,height:30,marginTop:11}} onChange={handleInput} placeholder={'sample'}/>
            </div>
            <div>
              <button type="submit" style={{color: "#000080", background:'#00FFFF'}}>Save here</button>
            </div>
          </Card>
        <Button
            style={style4}
            onClick={() => history.push('/')}
        >Top
        </Button>
    </Container>
</form>
  );
}

export default API_Create;



