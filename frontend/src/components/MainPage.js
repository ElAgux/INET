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

const MainPage = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inProp, setInProp] = useState(false);
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };
    const toggle = () => setIsOpen(!isOpen); 


    return (
      <body className="mainbody">
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
     {/*- <CSSTransition in={inProp} classNames="contentmainscreen">*/}
      <section className="mainscreen">
        <div className={isActive ? "contentmainscreen" : "hidden" }>
        <p className="textboxcontent">El Primer Museo Inteligente de Argentina.</p>
       
          <div className="buttonbox">
            <Link to={'/'}>
  <Button
  onClick={ToggleClass}
    block
    color="light"
    outline>
    Comenzar recorrido
  </Button></Link>
</div>
        </div>
     
        </section>
<div className={isActive ? "hidden" : "cardsbox"}>
<div className="card1">
    <Card>
      <CardImg
      className="cardimg" 
        alt="fachada del museo"
        src="/imagenes/museo.jpg"
        top
        
      />
      <CardBody>
        <CardTitle tag="h5" className="mb-5">
          Sobre Nosotros
        </CardTitle>
        
        <CardText className="mb-5">
          Toda la informacion sobre el primer museo inteligente de Argentina
        </CardText>
        <Link to={'/Areas'}>
        <Button block>
          Ver
        </Button>
        </Link>
      </CardBody>
    </Card>
    </div>
    <div className="card2">
    <Card>
      <CardImg  
        alt="Card image cap"
        src="/imagenes/visita.jpg"
        top
        className="cardimg"
      />
      <CardBody>
        <CardTitle tag="h5" className="mb-5">
          Visitas Guiadas
        </CardTitle>
      
        <CardText className="mb-5">
          Acerca de nuestras visitas guiadas por el museo
        </CardText>
        <Link to={'/seleccionarVisitaGuiada'}>
        <Button block>
          Ver
        </Button>
        </Link>
      </CardBody>
    </Card>
    </div>
    <div className="card3">
    <Card>
      <CardImg
        alt="Card image cap"
        src="/imagenes/areas.jpg"
        top
        
        className="cardimg"
      />
      <CardBody>
        <CardTitle tag="h5" className="mb-5"
        >
          Areas en Exposicion
        </CardTitle>
        
        <CardText className="mb-5">
        Ver las areas de exposicion en el museo
        </CardText>
        <Link to={'/listararea'}>
        <Button block>
        Ver
        </Button>
        </Link>
      </CardBody>
    </Card>
    </div>
    
  </div> 
   </body>
      
    );
  }

export default MainPage;