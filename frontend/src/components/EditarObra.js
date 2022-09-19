import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link} from "react-router-dom";
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

const EditarObra = (args) => {
  const [Autor, setAutor] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Nombre, setNombre] = useState("");
  const [IdTipoObra, setIdTipoObra] = useState("");
  const [TiposObras, setTiposObras] = useState([]);
  const { IdObra } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [inProp, setInProp] = useState(false);
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
      setActive(!isActive); 
     };
      const toggle = () => setIsOpen(!isOpen); 
  const navigate = useNavigate();

  useEffect(() => {
    getTiposObras();
    getObraById();
  }, []);

  const updateObra = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/obras/${IdObra}`, {
      Autor,  
      Descripcion,
      Nombre,
      IdTipoObra,
      });
      navigate("/listarObras");
    } catch (error) {
      console.log(error);
    }
  };

  const getTiposObras = async () => {
    const response = await axios.get("http://localhost:5000/tiposobras");
    setTiposObras(response.data);
  };
  
  const getObraById = async () => {
    const response = await axios.get(`http://localhost:5000/obras/${IdObra}`);
    const i = 0;
    
    setAutor(response.data[i].Autor);
    setDescripcion(response.data[i].Descripcion);
    setNombre(response.data[i].Nombre);
    setIdTipoObra(response.data[i].IdTipoObra);
    console.log(JSON.stringify(response, null, 1));

  };

  return (
    <div>
  <Navbar {...args}
          className="my-0"
          color="dark"
          dark>
            
          <NavbarBrand href="/">Museo Inteligente</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Recorridos</NavLink>
              </NavItem>
              <NavItem>
                <Link to={'/login'}>
                <NavLink>
                  login
                </NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
             <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
    <form onSubmit={(event) => {updateObra(event);}}>    
        <div className="field">
          <label className="label">Autor</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={Autor}
              onChange={(e) => setAutor(e.target.value)}
              placeholder="Autor"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Nombre de la obra</label>
          <div className="control">
            <input
              type="text"
              pattern="[a-z A-Z ñ]{2,20}"
              className="input"
              value={Nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
              required
            />
          </div>
        </div>
        
        <div className="field">
          <label className="label">Descripcion</label>
          <div className="control">
            <input
              type="text"
              pattern="[a-z A-Z ñ]{2,20}"
              className="input"
              value={Descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripcion"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Tipo Obra</label>
          <div className="select is-fullwidth">
                <select
                    value={IdTipoObra}                       
                    onChange={(e) => setIdTipoObra(e.target.value)}
                    key={TiposObras.IdTipoObra}
                >
                  {TiposObras.map((TiposObras) => (
                  
                  <option value={TiposObras.IdTipoObra}>{TiposObras.Nombre}</option>
                
                  ))}
                </select>
          </div>
          </div>
        <div className="field">
          <button type="submit" className="button is-success">
            Save
          </button>
          <Link
                  to={'/ListarObra'}
                  className="button is-small is-info mr-2"
                >
                  Back
          </Link>
        </div>
      </form>
    </div>
  </div>
  </div>
);
};
export default EditarObra;
