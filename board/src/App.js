import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import API_Detail from "./components/API_Detail"
import { BrowserRouter as Router,Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import API_Index from "./components/API_Index";
import API_Create from "./components/API_Create";
import API_Edit from "./components/API_Edit";



function App() {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Header/>
            <Route exact path="/">
                <API_Index/>
            </Route>
            <Route path="/detail">
                <API_Detail />
            </Route>
            <Route path="/create">
                <API_Create />
            </Route>
            <Route path="/edit">
                <API_Edit/>
            </Route>
            <Footer/>
        </Router>
    );
}

export default App;
