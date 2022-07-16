//import Connection from "./components/Connection";
//import Inscription from "./pages/Inscription";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookpage from "./pages/Bookpage";
import Homepage from "./pages/Homepage";
import InscriptionP from "./pages/InscriptionP";
import Useraccount from "./pages/Useraccount";
//import InscriptionCard from "./components/InscriptionCard";
import "./style/App.css"



function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/bookpage" element={<Bookpage/>}/>
  <Route path="/" element={<Homepage/>} />
  <Route path="/useracount" element={<Useraccount/>}/>
  <Route path="/inscriptionp" element={<InscriptionP/>}/>

  </Routes>
  </BrowserRouter>
  );
}

export default App;

