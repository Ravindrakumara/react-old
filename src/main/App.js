import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import Header from '../main/home/Header';
import Home from '../main/home/Home';
import Book from "../main/books/Books";
import Books_ta from "../main/books/Books_ta";
import Books_en from "../main/books/Books_en";
import Books_sin from "../main/books/Books_sin";
import Footer from "./footer/Footer2";
import Footer_lower from "../main/footer/Footer_lower";
import Footer_mid from "../main/footer/Footer_mid";
import Footer_top from "../main/footer/Footer_top";

function App() {
  return (
    <Router>
        <div className="App">

        <switch>
              <Route path="/about">
                  <h3>hello iam here</h3>
              </Route>

              <Route path="/contact">
                  <h3>hello you wanna contact me </h3>
              </Route>

              <Route path="/">
                <Header/> {/*This default hearder with Navigation*/}
                  <Home/> {/*This default homepage with contant layout*/}
                  <Book/>
                  <Books_en/>
                  <Books_ta />
                  <Books_sin/>
                  <Footer/>
                  <Footer_top/>
                  <Footer_mid/>
                  
                  <Footer_lower />
              </Route>
        </switch>

      </div>
    </Router>
  );
}

export default App;
