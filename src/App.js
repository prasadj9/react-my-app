import './App.css';
import ComponentA from './components/ComponentA';
import ConditionalRender from './components/ConditionalRender';
import HandleEvents from './components/HandleEvents';
import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import CallExpandable from './components/CallExpandable';
import RandomColorGeneraor from './components/RandomColorGeneraor';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ComponentA/>
      <ConditionalRender/>
      <HandleEvents/> */}
      <Routes>
        <Route path='/' Component={ComponentA} />
        <Route path='/switch' Component={ConditionalRender} />
        <Route path='/event' Component={HandleEvents} />
        <Route path='/expandabletext' Component={CallExpandable} />
        <Route path='/randomcolor' Component={RandomColorGeneraor} />
      </Routes>
    </div>
  );
}

export default App;
