import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { CSVLink} from "react-csv";
import { AddIcon } from "./add-outline";
import  './src/css/museo.css';
import { BackIcon } from "./back-svgrepo-com";
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

const ListarArea = (args) => {
  const [area, setArea] = useState([]);
  const [searchTerm, setSearch ] = useState("")
  const [selectedData, setSelectedData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [inProp, setInProp] = useState(false);
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
      setActive(!isActive); 
     };
      const toggle = () => setIsOpen(!isOpen); 

  useEffect(() => {
    getArea();
  }, []);



const getArea = async () => {
  const response = await axios.get("http://localhost:5000/areas");
  setArea(response.data);
};



const columnas = [
  {
    name : 'IdArea',
    selector : 'IdArea',
    sortable : true
  },
  {
    name : 'Nombre',
    selector : 'Nombre',
    sortable : true
  },
  {
    name : 'Descripcion',
    selector : 'Descripcion',
    sortable : true
  },
  {
    name : 'Estado',
    selector : 'Estado',
    sortable : true
  },
  {
    name : 'IdTipoDeArea',
    selector : 'NombreTipoArea',
    sortable : true
  },
{
    cell: (area) => <Link to={`/editarArea/${area.IdArea}`}
    className="button is-small is-info mr-2 icon-pencil"
    title="Editar">Editar</Link>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  }
  
]

const searcher = (e) => {
  setSearch(e.target.value)   
}

	const handleRowSelected = (state) => {
		setSelectedData(state.selectedRows);
	};

  return (
<body>
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
  <div className="globalheadbox">
<Link to="/iJA8aiuhad8oiusa9uS0USD9u0d">
<div className="backheadmainpressablebox">
      
      <div className="headpressablebox">
              <div className="headbuttonpressablebox">
              <BackIcon></BackIcon>
              </div>
            
</div>

</div>
</Link>
  <Link to="creararea">
<div className="headmainpressablebox">
      
      <div className="headpressablebox">
              <div className="headbuttonpressablebox">
              <AddIcon></AddIcon>
              </div>
              <div className="headtitlepressablebox">
              <h1>Crear Area</h1>
              </div>
              <div className="headtextpressablebox"> <p>Crear area nueva de exposicion</p>
              </div>
</div>


</div>
</Link>
</div>
    <div>
 
  
      <DataTable
      pagination
      selectableRows
      onSelectedRowsChange={handleRowSelected}
      fixedHeader
      fixedHeaderScrollHeight="550px"
      columns={columnas}
      data={area.filter((item) => {
        if (searchTerm === "") {
          return item;
        } else if (
          item.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return item;
        }
      })} 
       />
    </div>
</body>

  );
};


export default ListarArea;
