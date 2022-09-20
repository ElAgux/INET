import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardGroup,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const CrearVisitaGuiada = () => {
  const [Nombre, setNombre] = useState("");
  const [FechaYHora, setFechaYHora] = useState("");
  const [IdIdioma, setIdIdioma] = useState("");
  const [IdVisitaGuiada, setIdVisitaGuiada] = useState("");
  const [Idiomas, setIdiomas] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [inProp, setInProp] = useState(false);
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
      setActive(!isActive); 
     };
      const toggle = () => setIsOpen(!isOpen); 
  const navigate = useNavigate();

  useEffect(() => {
    getIdiomas();
    getIdVisitasGuiadas();
  }, []);

  const CrearVisitaGuiada = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/visitasGuiadas", {
      Nombre,
      FechaYHora 
      });
      //
      await axios.post("http://localhost:5000/idiomasPorVisitasGuiadas", {
      IdIdioma,
      IdVisitaGuiada 
      });
      //
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getIdiomas = async () => {
    const response = await axios.get("http://localhost:5000/idiomas");
    setIdiomas(response.data);
  };

  const getIdVisitasGuiadas = async () => {
    const response = await axios.get("http://localhost:5000/IdVisitaGuiada");
    const i = 0;
    setIdVisitaGuiada(response.data[i].IdVisitaGuiada);
    if(IdVisitaGuiada == ''){
      setIdVisitaGuiada(1)
    }else{
    setIdVisitaGuiada(response.data[i].IdVisitaGuiada + 1);
    }
    console.log(IdVisitaGuiada)
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
      <form onSubmit={(event) => {CrearVisitaGuiada(event);}}>
        
          <div className="field">
            <label className="label">Nombre visita guiada</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                required
              />
            </div>
          </div>

         
          <div className="field">
            <label className="label">Fecha y hora</label>
            <div className="control">
              <input
                type="datetime-local"
                className="input"
                value={FechaYHora}
                onChange={(e) => setFechaYHora(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
          <label className="label">Idioma de la visita guiada</label>
          <div className="select is-fullwidth">
                <select
                    value={IdIdioma}                       
                    onChange={(e) => setIdIdioma(e.target.value)}
                    key={Idiomas.IdIdioma}
                >
                <option value="0">Seleccionar</option>
                  {Idiomas.map((Idiomas) => (
                  
                  <option value={Idiomas.IdIdioma}>{Idiomas.Nombre}</option>
                
                  ))}
                </select>
          </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
            <Link
                    to={'/listarVisitaGuiada'}
                    className="button is-small is-info mr-2"
                  >
                    Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearVisitaGuiada;

