import React from "react";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Code from './pages/Code';
const App = () => {
    return (
        <Router>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/code" component={Code} />
            <Route exact path="/" component={Home}/>
        </Router>
    );
};

export default App;
