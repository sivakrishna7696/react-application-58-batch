import './App.css';
import React from 'react';
import Header from './Components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route } from 'react-router-dom';
import RoutesComp from './Components/RoutesComponent/RoutesComp';
import CounterUseState from './Components/hooks/CounterUseState';
import Compc from './Components/usecontext/Compc';

export const userContext = React.createContext();

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesComp />
      {/* <CounterUseState /> */}
      <userContext.Provider value={"passing data to compC"}>
         <Compc />
      </userContext.Provider>
    </div>
  );
}

export default App;
