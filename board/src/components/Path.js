import React from 'react'
import { Link } from 'react-router-dom'

class Path extends React.Component {
    render(){
        return(
            <div>
                <Link to="http://127.0.0.1:8000/api/boards/:id">Detail</Link>
            </div>
        )
    }
}

export default Path ;
