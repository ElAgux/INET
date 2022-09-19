import React from 'react';
import {Link} from "react-router-dom";


const Home = () => {
  return (
    <div className="">
      <div className="">
        <br/>
        <Link to={'/ListarArea'}>
         Areas
        </Link>
        <br/>
        <Link to={'/ListarObras'}>
          Obras
        </Link>
        <br/>
        <Link to={'/CrearVisitaGuiada'}>
          Crear VisitaGuiada
        </Link>
        <br/>
        <Link to={'/seleccionarVisitaGuiada'}>
          Seleccionar VisitaGuiada
        </Link>
      </div>
    </div>
  );
};

export default Home;
