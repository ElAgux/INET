import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
 
const SeleccionarVisitaGuiada = () => {
  //
  const [NombreVisitante, setNombreVisitante] = useState("");
  const [Apellido, setApellido] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Documento, setDocumento] = useState("");
  //
  const [VisitasGuiadasPorIdioma, setVisitasGuiadasPorIdioma]= useState([]);
  //
  const [IdIdioma, setIdIdioma]= useState("");
  //const [NombreIdioma, setNombreIdioma]= useState("");
  const [Idiomas, setIdiomas]= useState([]);

  //
  const [IdVisitaGuiada, setIdVisitaGuiada]= useState("");
  //
  const navigate = useNavigate();

  useEffect(() => {
    getIdiomas();
  }, []);

  const SeleccionarVisitaGuiada = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/visitante", {
      NombreVisitante,  
      Apellido,
      Email,
      Telefono,
      Documento,
      IdVisitaGuiada
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  const getIdiomas = async () => {
    const response = await axios.get("http://localhost:5000/idiomas");
    setIdiomas(response.data);
  };

  const getVisitasGuiadasPorIdioma = async () => {
    const response = await axios.get(`http://localhost:5000/VisitasGuiadasPorIdioma/${IdIdioma}`);
    setVisitasGuiadasPorIdioma(response.data);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
      <form onSubmit={(event) => {SeleccionarVisitaGuiada(event);}}>
          <div className="field">
            <label className="label">Nombre</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={NombreVisitante}
                onChange={(e) => setNombreVisitante(e.target.value)}
                placeholder="Nombre"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Apellido</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Apellido}
                onChange={(e) => setApellido(e.target.value)}
                placeholder="Apellido"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Telefono</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={Telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Documento</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={Documento}
                onChange={(e) => setDocumento(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
          <label className="label">Idioma del guia</label>
          <div className="select is-fullwidth">
                <select
                    value={IdIdioma}                       
                    onChange={(e) => {setIdIdioma(e.target.value)}}
                    onClick={getVisitasGuiadasPorIdioma}
                    key={Idiomas.IdIdioma}
                >
                <option value="0">Seleccionar</option>
                  {Idiomas.map((Idiomas) => (
                  
                  <option value={Idiomas.IdIdioma}>{Idiomas.Nombre}</option>
                
                  ))}
                </select>
          </div>
          </div>

          <div className="field">
          <label className="label">Visitas Guiadas filtradas por idioma de guia</label>
          <div className="select is-fullwidth">
                <select
                    value={IdVisitaGuiada}                       
                    onChange={(e) => setIdVisitaGuiada(e.target.value)}
                 
                    key={VisitasGuiadasPorIdioma.IdVisitaGuiada}
                >
                <option value="0">Seleccionar</option>
                  {VisitasGuiadasPorIdioma.map((VisitasGuiadasPorIdioma) => (
                  
                  <option value={VisitasGuiadasPorIdioma.IdVisitaGuiada}>{VisitasGuiadasPorIdioma.Nombre + " " + VisitasGuiadasPorIdioma.FechaYHora}</option>
                
                  ))}
                </select>
          </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
            <Link
                    to={'/'}
                    className="button is-small is-info mr-2"
                  >
                    Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SeleccionarVisitaGuiada;


