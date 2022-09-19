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

const EditarArea = (args) => {
  const [Nombre, setNombre] = useState("");
  const [IdTipoArea, setIdTipoArea] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [TiposAreas, setTiposAreas] = useState([]);
  const { IdArea } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [inProp, setInProp] = useState(false);
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
      setActive(!isActive); 
     };
      const toggle = () => setIsOpen(!isOpen); 

  const navigate = useNavigate();


  
  useEffect(() => {
    getTiposAreas();
    getAreaById();
  }, []);

  const actualizarArea = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/areas/${IdArea}`, {
      Nombre,
      Descripcion,
      IdTipoArea,
      });
      navigate("/listarArea");
    } catch (error) {
      console.log(error);
    }
  };

  const getTiposAreas = async () => {
    const response = await axios.get("http://localhost:5000/tiposareas");
    setTiposAreas(response.data);
  };
  
  const getAreaById = async () => {
    const response = await axios.get(`http://localhost:5000/areas/${IdArea}`);
    const i = 0;
    
    setNombre(response.data[i].Nombre);
    setDescripcion(response.data[i].Descripcion);
    setIdTipoArea(response.data[i].IdTipoArea);
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
    <form onSubmit={(event) => {actualizarArea(event);}}>   
        <div className="field">
          <label className="label">TipoArea</label>
          <div className="select is-fullwidth">
                <select
                    value={IdTipoArea}                       
                    onChange={(e) => setIdTipoArea(e.target.value)}
                    key={TiposAreas.id}
                >
                  {TiposAreas.map((TiposAreas) => (
                  
                  <option value={TiposAreas.IdTipoArea}>{TiposAreas.Nombre}</option>
                
                  ))}
                </select>
          </div>
          </div>
        <div className="field">
          <label className="label">Nombre</label>
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
          <label className="label">Descripcion</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={Descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripcion"
              required
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-success">
            Save
          </button>
          <Link
                  to={'/listarArea'}
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
export default EditarArea;
