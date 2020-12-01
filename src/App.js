import Login from "./Login";
import Register from "./Register";
import React, { Component } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends Component{
    render() {
        return(
            <>
                <div className="bg">
                    <div className="App">
                        <Router>
                            <Navbar bg="primary" expand="lg" variant="dark" >
                                <Navbar.Brand>Login/register</Navbar.Brand>
                                    <Button variant="light" href="/login">Login</Button>
                                    <Button variant="light" href="/register">Register</Button>
                                    <Button variant="light" href="/">Home</Button>
                            </Navbar>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/register" exact component={Register}/>
                            <Route path="/" exact component={Home}/>

                        </Router>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
