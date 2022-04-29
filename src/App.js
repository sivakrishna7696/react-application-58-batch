import './App.css';
import Header from './Components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import RoutesComp from './Components/RoutesComponent/RoutesComp';
import CounterUseState from './Components/hooks/CounterUseState';

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesComp />
      {/* <CounterUseState /> */}
    </div>
  );
}

export default App;
