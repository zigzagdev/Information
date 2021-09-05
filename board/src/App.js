import React  from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from "./components/Footer";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: []
        };
        this.getData = this.getData.bind(this);
    }

    getData() {
        axios
            .get('http://localhost:8080/api/boards')
            .then(results => {
                const data = results.data;
                console.log(data);
                this.setState({
                    boards: [...data]
                });
            });
    }

    render() {
        const boards = this.state.boards.map(board => {
            return <li key={board.id}>{board.title}
                {board.name}
                {board.description}
            </li>
        });

        return (
          <div>
                <div className="App">Test</div>
          </div>
        );
    }
}


export default App;
