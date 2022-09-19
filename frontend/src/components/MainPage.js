import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
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
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Turnos
                </NavLink>
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
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
     {/*- <CSSTransition in={inProp} classNames="contentmainscreen">*/}
      <section className="mainscreen">
        <div className="contentmainscreen">
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
<div className={isActive ? "hidden" : ""}>

<CardGroup>
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Visitas Guiadas
        </CardTitle>
        
        <CardText>
          Ver los turnos disponibles para visita guiada
        </CardText>
        <br/>
        <br/>
        <br/>
        <Button block>
          Button
        </Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          This card has supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button block>
          Button
        </Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
        </CardText>
        <Button block>
          Areas
        </Button>
      </CardBody>
    </Card>
  </CardGroup>
    
  </div> 
   </body>
      
    );
  }

export default MainPage;