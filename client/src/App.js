import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Web from './components/Web';
import Desktop from './components/Desktop';
import Error from './components/Error';
import Navbar from './components/Navbar';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <header><Navbar /></header>
      <main>
        <switch>
          <Route path='/' component={Home} />
          <Route path='/web' component={Web} />
          <Route path='/destop' component={Desktop} />
          <Route component={Error} />
        </switch>
      </main>
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
