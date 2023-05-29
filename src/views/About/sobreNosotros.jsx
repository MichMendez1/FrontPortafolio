import React from "react";
import Image from '../../img/school.jpg';

const AboutPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="jumbotron">
            <img
              src={Image}
              alt="Banner"
              className="img-fluid banner-image"
            />
          </div>
          <div className="about-page">
            <h1>Sobre nosotros</h1>
            <p>
              Bienvenidos a Nuevos Horizontes, una escuela privada comprometida
              con la excelencia académica y el desarrollo integral de nuestros
              estudiantes.
            </p>
            <h2>Nuestra misión</h2>
            <p>
              Nuestra misión en Nuevos Horizontes es proporcionar una educación
              de calidad que inspire el amor por el aprendizaje, fomente el
              crecimiento personal y prepare a nuestros estudiantes para
              enfrentar los desafíos del futuro.
            </p>
            <h2>Nuestros valores</h2>
            <ul>
              <li>Excelencia académica</li>
              <li>Respeto y tolerancia</li>
              <li>Innovación educativa</li>
              <li>Desarrollo personal y emocional</li>
              <li>Compromiso con la comunidad</li>
            </ul>
            <h2>Nuestro equipo</h2>
            <p>
              En Nuevos Horizontes contamos con un equipo docente altamente
              capacitado y comprometido con la educación de nuestros
              estudiantes. Nuestros profesores se dedican a brindar una
              experiencia educativa enriquecedora y a cultivar un entorno de
              apoyo y crecimiento.
            </p>
            <h2>Contacto</h2>
            <p>
              Si tienes alguna pregunta o deseas obtener más información sobre
              Nuevos Horizontes, no dudes en contactarnos. Estaremos encantados
              de atenderte.
            </p>
            <p>Dirección: Calle Principal 123, Ciudad, País</p>
            <p>Teléfono: +123 456 7890</p>
            <p>Correo electrónico: info@nuevoshorizontes.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
