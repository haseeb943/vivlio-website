/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Footer from './components/inc/Footer';

import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/services" component={Services} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Redirect to="/" />
      </Switch>
       <Footer/>
    </div>
  );
}

export default App;
