import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { CSVLink} from "react-csv";
import differenceBy from 'lodash/differenceBy';

const ListarObra = () => {
  const [obra, setObra] = useState([]);
  const [searchTerm, setSearch ] = useState("")
  const [selectedData, setSelectedData] = useState([]);
  

  useEffect(() => {
    getObras();
  }, []);

const getObras = async () => {
  const response = await axios.get("http://localhost:5000/obras");
  setObra(response.data);
};



const columnas = [
  {
    name : 'id obra',
    selector : 'IdObra',
    sortable : true
  },
  {
    name : 'autor',
    selector : 'Autor',
    sortable : true
  },
  {
    name : 'Descripcion',
    selector : 'Descripcion',
    sortable : true
  },
  {
    name : 'Nombre',
    selector : 'Nombre',
    sortable : true
  },
  {    
    name:'Tipo Obra',
    selector:'NombreObra',
    sortable: true
  },
{
    cell: (obra) => <Link to={`/EditarObra/${obra.IdObra}`}
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
    <input type="text" name="searchTerm" id="searchTerm" onChange={searcher}></input>
    <Link to={`/CrearObra`} className="button is-success">
    Nuevo</Link>
    <CSVLink data={selectedData} onClick="" className="button is-success" filename={"VEC2_personas.csv"}>Exportar campos seleccionados CSV</CSVLink>
      <DataTable
      pagination
      selectableRows
      onSelectedRowsChange={handleRowSelected}
      fixedHeader
      fixedHeaderScrollHeight="550px"
      columns={columnas}
      data={obra.filter((item) => {
        if (searchTerm === "") {
          return item;
        } else if (
          item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || item.email.toLowerCase().includes(searchTerm.toLowerCase()) || item.apellido.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return item;
        }
      })} 
       />
    </div>
</body>

  );
};


export default ListarObra;
