import React, { useEffect, useState } from "react";
import { useHistory,Link } from "react-router-dom";
import axios from "axios";

function AddBoard () {

  const history = useHistory()
  const [board, setBoard] = useState({
    title: "",
    name: "",
    description: "",
  });

  const  handleInput = (e) => {
      e.persist();
      setBoard({...boardInput, [e.target.name]: e.target.value})
  }

  const data = {
      title:boardInput.title,
      name: boardInput.name,
      description: boardInput.description
  }

  axios.post('http://127.0.0.1:8000/api/boards', data)
      .then(response => {
          console.log('Post was created successfully in FrontScreen !', response.data);
      });

}
