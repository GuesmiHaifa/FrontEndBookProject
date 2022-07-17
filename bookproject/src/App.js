

import './style/App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import "./style/App.css";
import Bookpage from './pages/Bookpage';
import CGUpage from './pages/CGUpage';

import CGU from './components/CGUBook';
import Navigation from './components/Navigation';





function App() {
  return (
    //<div>
     // <Homepage/>
    //</div>
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <div className='main'>
          <Routes>     {/*C'est  à l'interieur de cette balise que React va charger les routes*/}
            <Route path="/homepage" element={<Homepage/>} />
            <Route path="/cgu" element={<CGUpage/>} />
            <Route path="/Bookpage" element={<Bookpage/>} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
