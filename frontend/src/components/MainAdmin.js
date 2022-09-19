import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CSSTransition, Transition } from 'react-transition-group'
import  './src/css/museo.css';
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
import { AddIcon } from "./add-outline";
import  './src/css/museo.css';const MainAdmin = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inProp, setInProp] = useState(false);
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };
    const toggle = () => setIsOpen(!isOpen); 


    return (
      <body className="mainadminbody">
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
      </div>
      <section className="adminmainscreen">
      <Link to={'/register'}>
        <div className="mainpressablebox">
      
      <div className="pressablebox">
              <div className="buttonpressablebox">
              <AddIcon></AddIcon>
              </div>
              <div className="titlepressablebox">
              <h1>Registro de Usuarios</h1>
              </div>
              <div className="textpressablebox"> <p>Ver usuarios registrados y/o registrar nuevos usuarios con derechos de administrador</p>
              </div>
</div>


</div>
</Link>
<Link to={'/listararea'}>
        <div className="mainpressablebox">
      
      <div className="pressablebox">
              <div className="buttonpressablebox">
              <AddIcon></AddIcon>
              </div>
              <div className="titlepressablebox">
              <h1>Areas</h1>
              </div>
              <div className="textpressablebox"> <p>Ver, agregar y/o modificar areas del museo</p>
              </div>
</div>
</div>
</Link>

<Link to={'/listarObras'}>
        <div className="mainpressablebox">
      
      <div className="pressablebox">
              <div className="buttonpressablebox">
              <AddIcon></AddIcon>
              </div>
              <div className="titlepressablebox">
              <h1>Obras</h1>
              </div>
              <div className="textpressablebox"> <p>Ver, agregar y/o modificar areas del museo</p>
              </div>
</div>


</div>
</Link>


<Link to={'/'}>
        <div className="mainpressablebox">
      
      <div className="pressablebox">
              <div className="buttonpressablebox">
              <AddIcon></AddIcon>
              </div>
              <div className="titlepressablebox">
              <h1>Visitas Guiadas</h1>
              </div>
              <div className="textpressablebox"> <p>Programar y adminsitrar visitas guiadas al museo</p>
              </div>
</div>


</div>
</Link>

        </section>
    
  
   </body>
      
    );
  }

export default MainAdmin;