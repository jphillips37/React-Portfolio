import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Web from './components/Web';
import Desktop from './components/Desktop';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <header>
        <Navbar />

      </header>
      <main>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/web" component={Web} />
          <Route path="/destop" component={Desktop} />
          <Route component={Error} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       {!data ? "Loading..." : data}
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
