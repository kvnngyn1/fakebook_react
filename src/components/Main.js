import React, { Component } from 'react';
import '../App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Register from '../views/Register';

export default class Main extends Component {
    render() {
        // this.props.yes
        return (
            <React.Fragment>
                <header>
                    {/* This is NOT HTML. IT IS REACT!. everything needs a closing tag else it wont work*/}
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/">Fakebook Reeact</ Link>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">

                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </ul>
                            
                        </div>
                    </nav>
                </header>

                <main className="container">
                    <Switch>
                        <Route exact path='/' render={ () => <Home posts={ this.props.posts }/> }/>
                        <Route exact path='/about' render={ () => <About /> }/>
                        <Route exact path='/contact' render={ () => <Contact /> }/>
                        <Route exact path='/profile' render={ () => <Profile /> }/>
                        <Route exact path='/login' render={ () => <Login /> }/>
                        <Route exact path='/register' render={ () => <Register /> }/>
                    </Switch>
                </main>

                <footer className=" bg-dark">
                    <div className="container">
                        <div className="btn-block">
                            <ul className="list-unstyled  text-white">
                                <h3>Page Links</h3>
                                <hr id="footer-break"/>
                                <li ><Link className="footer-link"to="/">Home</Link></li>
                                <li ><Link className="footer-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        
                    </div>
                </footer>
            </React.Fragment>

            // Taking data through this.props from App.js
        //     <div>
        //         { this.props.info }
        //     </div>
        // 
        )
    }
}



