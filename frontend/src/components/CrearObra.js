import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
 
const CrearObra = () => {
  const [Autor, setAutor] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Nombre, setNombre] = useState("");
  const [IdTipoObra, setIdTipoObra] = useState("");
  const [IdArea, setIdArea] = useState("");
  const [TiposObras, setTiposObras] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTiposObras();
  }, []);

  const CrearObra = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/obras", {
      Autor,
      Descripcion,  
      Nombre,
      IdTipoObra,
      IdArea,
      });
      navigate("/listarObra");
    } catch (error) {
      console.log(error);
    }
  };

  const getTiposObras = async () => {
    const response = await axios.get("http://localhost:5000/tiposobras");
    setTiposObras(response.data);
  };

  return (
<body>
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
    <form onSubmit={(event) => {CrearObra(event);}}>    
        
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
          <label className="label">Nombre de la Obra</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={Nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Autor"
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
          {/*
          <div className="field">
          <label className="label">Tipo Obra</label>
          <div className="select is-fullwidth">
                <select
                    value={IdArea}                       
                    onChange={(e) => setIdArea(e.target.value)}
                    key={TiposObras.IdTipoObra}
                >
                  {TiposObras.map((TiposObras) => (
                  
                  <option value={TiposObras.IdTipoObra}>{TiposObras.Nombre}</option>
                
                  ))}
                </select>
          </div>
          </div>
                  */}
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
</body>
  );
};

export default CrearObra;

