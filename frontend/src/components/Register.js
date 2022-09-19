import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link} from "react-router-dom";
import  './src/css/museo.css';
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

const Register = (args) => {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [inProp, setInProp] = useState(false);
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive); 
       };
        const toggle = () => setIsOpen(!isOpen); 
    
    const register = async(e) => {
        e.preventDefault();
        console.log("Nombre: "+usernameReg);
        console.log("Pass: "+passwordReg);
        try {
            await axios.post('http://localhost:5000/Register', {
                usernameReg,
                passwordReg,
            });
            navigate("/iJA8aiuhad8oiusa9uS0USD9u0d");
        }catch (error) {
          alert("Usuario y/o contraseña incorrecto/s")
            console.log(error.message);
        }
        
    };
    
    return(<body>
        <div className="mainadminbody">
        
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
          <form onSubmit={register}>
              <div className="login">
                <br/>
                  <h1 className="logintitle">Registro de Usuario</h1>
            
                  <div className="inputbox">
                  <Input
                  classname="inputline"
                  value={usernameReg}
                  onChange={(e)=> {
                    setUsernameReg(e.target.value)
                  }}
                  >
                      </Input>
                      </div>
                  
                  <div className="inputbox">
                  <Input
                  type="password"
                  value={passwordReg}
                  onChange={(e)=> {
                    setPasswordReg(e.target.value)
                  }}
                 >
                  </Input>
                  </div>
                  <div className="buttonlogbox">
                      <div className="justbuttonbox">
                  <Button type="submit" className="logbutton"
                  block>Registrar usuario</Button>
                  </div>
                  <div className="justbuttonbox">
                  <Link to={'/iJA8aiuhad8oiusa9uS0USD9u0d'}>
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
  

export default Register;