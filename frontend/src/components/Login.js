import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { CSSTransition, Transition } from 'react-transition-group'
import  './src/css/museo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Input,
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

const Login = (args) => {
    
    const [userLog, setUserLog] = useState("");
    const [passLog, setPassLog] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [inProp, setInProp] = useState(false);
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive); 
       };
        const toggle = () => setIsOpen(!isOpen); 
    const navigate = useNavigate();

    const Login = async(e) => {
        e.preventDefault();
        console.log("Nombre de usuario: " + userLog);
        console.log("Password: " + passLog);
     
        try {
            await axios.post('http://localhost:5000/login',{
                userLog,
                passLog,
            })
            .then(({data})=>{
                console.log(data);
                navigate("/iJA8aiuhad8oiusa9uS0USD9u0d");
            })
            .catch(({results})=>{
                console.log(results.data);
            });
        }catch (error) {
          alert("Usuario y/o contraseña incorrecto/s")
            console.log(error.message);
        }
        
    };
    
    return(
        <body>
      <div className="mainbody">
      
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
      <div classname="loginbox">
        <form onSubmit={Login}>
            <div className="login">
              <br/>
                <h1 className="logintitle">Login</h1>
          
                <div className="inputbox">
                <Input
                classname="inputline"
                value={userLog}
                onChange={(e)=> {
                    setUserLog(e.target.value)
                }}
                >
                    </Input>
                    </div>
                
                <div className="inputbox">
                <Input
                type="password"
                value={passLog}
                onChange={(e)=> {
                    setPassLog(e.target.value)
                }}
               >
                </Input>
                </div>
                <div className="buttonlogbox">
                    <div className="justbuttonbox">
                <Button type="submit" className="logbutton"
                block>Login</Button>
                </div>
                <div className="justbuttonbox">
                <Link to={'/'}>
                    <Button
                    block
                    dark
                 
                  outline

                    >
                    Back
                    </Button>
                </Link>
                </div>
                </div>
                
            </div>
        </form>
        </div>  
        </body>
    );
};

export default Login;