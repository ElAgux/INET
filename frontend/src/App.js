import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListarArea from "./components/ListarArea";
import CrearArea from "./components/CrearArea";
import EditarArea from "./components/EditarArea";
import ListarObra from "./components/ListarObra";
import ListarVisitasGuiadas from "./components/ListarVisitasGuiadas";
import CrearObra from "./components/CrearObra";
import EditarObra from "./components/EditarObra";
import CrearVisitaGuiada from "./components/CrearVisitaGuiada";
import SeleccionarVisitaGuiada from "./components/SeleccionarVisitaGuiada.js"
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Register from "./components/Register";
import MainAdmin from "./components/MainAdmin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>  
        <Route path="iJA8aiuhad8oiusa9uS0USD9u0d" element={<MainAdmin/>}/>
        <Route path="listarArea" element={<ListarArea/>}/>
        <Route path="listarVisitasGuiadas" element={<ListarVisitasGuiadas/>}/>
        <Route path="listarObras" element={<ListarObra/>}/>
        <Route path="login" element= {<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="listarArea/crearArea" element={<CrearArea/>}/>
        <Route path="crearObra" element={<CrearObra/>}/>
        <Route path="seleccionarVisitaGuiada" element={<SeleccionarVisitaGuiada/>}/>
        <Route path="editarArea/:IdArea" element={<EditarArea/>}/>
        <Route path="editarObra/:IdObra" element={<EditarObra/>}/>
        <Route path="crearVisitaGuiada" element={<CrearVisitaGuiada/>}/>    
                

      </Routes>
    </BrowserRouter>
  );
}


export default App;
