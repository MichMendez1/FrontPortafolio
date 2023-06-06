import React from "react";
import "./HomePage.css"; // Archivo de estilos CSS para la página de inicio
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap CSS
import { Link, NavLink } from "react-router-dom";
import img4 from '../../img/libro.png'
import img2 from '../../img/colores.png'
import img1 from '../../img/cerebro.png'
import img3 from '../../img/estudio.png'
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="banner">
        <h1>Admisión 2024</h1>
        <h3>
          Descubre los beneficios de nuestra escuela privada: Formando mentes
          brillantes para un futuro exitoso
        </h3>
        <div className="postular">
          <button>Postula aquí</button>
        </div>
      </div>
      <div className="two-boxes-section">
        <div className="box">
          <h2>Descubre el nuevo concepto de educación</h2>
          <p>Formando mentes brillantes para un futuro exitoso</p>
        </div>
        <div className="box2">
          <p>
            Bienvenidos a nuestra escuela privada, un lugar donde la excelencia
            académica y el desarrollo integral de nuestros estudiantes son
            nuestra prioridad. Nuestra institución se destaca por ofrecer una
            educación de calidad, basada en valores sólidos y un enfoque
            innovador. En nuestra escuela, brindamos una experiencia educativa
            enriquecedora que prepara a nuestros estudiantes para enfrentar los
            desafíos del siglo XXI y convertirse en líderes destacados en sus
            respectivas áreas.
          </p>
        </div>
      </div>
      <div className="four-paragraphs-section">
        <div className="paragraph">
          <img src={img1} alt="Imagen 1" />
          <h2>Enseñanza</h2>
          <p>Nuestro enfoque pedagógico se basa en un riguroso plan de estudios que combina los fundamentos académicos con la aplicación práctica del conocimiento. </p>
        </div>
        <div className="paragraph">
          <img src={img2} alt="Imagen 2" />
          <h2>Innovación</h2>
          <p>En nuestra escuela, creemos en la importancia de estar a la vanguardia de la educación. Por eso, integramos la tecnología de manera efectiva en nuestras aulas.</p>
        </div>
        <div className="paragraph">
          <img src={img3} alt="Imagen 3" />
          <h2>Estudiantes</h2>
          <p>Nuestros estudiantes son el corazón de nuestra escuela. Nos enorgullece crear un ambiente inclusivo y de apoyo donde cada individuo se sienta valorado y respetado. </p>
        </div>
        <div className="paragraph">
          <img src={img4} alt="Imagen 4" />
          <h2>Recursos</h2>
          <p>En nuestra escuela, contamos con recursos excepcionales que enriquecen la experiencia educativa de nuestros estudiantes.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
