import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListarArea from "./components/ListarArea";
import CrearArea from "./components/CrearArea";
import EditarArea from "./components/EditarArea";
import ListarObra from "./components/ListarObra";
import CrearObra from "./components/CrearObra";
import EditarObra from "./components/EditarObra";
import CrearVisitaGuiada from "./components/CrearVisitaGuiada";
import SeleccionarVisitaGuiada from "./components/SeleccionarVisitaGuiada.js"
import ListarVisitasGuiadas from "./components/ListarVisitasGuiadas.js";
import MainPage from "./components/MainPage";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="listarArea" element={<ListarArea/>}/>
        <Route path="listarObras" element={<ListarObra/>}/>
        <Route path="listarVisitasGuiadas" element={<ListarVisitasGuiadas/>}/>

        <Route path="crearArea" element={<CrearArea/>}/>
        <Route path="crearArea" element={<CrearObra/>}/>
        <Route path="seleccionarVisitaGuiada" element={<SeleccionarVisitaGuiada/>}/>
        <Route path="editarArea/:IdArea" element={<EditarArea/>}/>
        <Route path="editarObra/:IdObra" element={<EditarObra/>}/>
        <Route path="crearVisitaGuiada" element={<CrearVisitaGuiada/>}/>
        <Route path="mainPage" element={<MainPage/>}/>    
        <Route path="/" element={<Home/>}/>          

      </Routes>
    </BrowserRouter>
  );
}


export default App;
