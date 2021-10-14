import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import API_Detail from "./components/API_Detail"
import { BrowserRouter as Router,Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import API_Index from "./components/API_Index";

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
            <Footer/>
        </Router>
    );
}

export default App;