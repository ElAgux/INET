import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { CSVLink} from "react-csv";

const ListarArea = () => {
  const [visitasGuiadas, setVisitasGuiadas] = useState([]);
  const [searchTerm, setSearch ] = useState("")
  const [selectedData, setSelectedData] = useState([]);
  

  useEffect(() => {
    getVisitasGuiadas();
  }, []);


const getVisitasGuiadas = async () => {
  const response = await axios.get("http://localhost:5000/visitasGuiadas");
  setVisitasGuiadas(response.data);
};

const columnas = [
  {
    name : 'Id',
    selector : 'IdVisitaGuiada',
    sortable : true
  },
  {
    name : 'Nombre',
    selector : 'Nombre',
    sortable : true
  },
  {
    name : 'Fecha y Hora',
    selector : 'FechaYHora',
    sortable : true
  },
  {
    name : 'Idioma',
    selector : 'NombreIdioma',
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
    <input type="text" name="searchTerm" id="searchTerm" onChange={searcher}></input>
    <Link to={`/CrearArea`} className="button is-success">
    Nuevo</Link>
    <CSVLink data={selectedData} onClick="" className="button is-success" filename={"Museo.csv"}>Exportar campos seleccionados CSV</CSVLink>
      <DataTable
      pagination
      selectableRows
      onSelectedRowsChange={handleRowSelected}
      fixedHeader
      fixedHeaderScrollHeight="550px"
      columns={columnas}
      data={visitasGuiadas.filter((item) => {
        if (searchTerm === "") {
          return item;
        } else if (
          item.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) || item.NombreIdioma.toLowerCase().includes(searchTerm.toLowerCase())
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
