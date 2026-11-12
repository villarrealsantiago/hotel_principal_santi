import "./Footer.css";

function Footer() {
  return (
    <footer className="text-white py-4 ">
      <div className="container ">
        <div className="row gy-4">
          <div className="col-md-4">
            <h4 className="footer-title fw-bold">Hotel Paraíso</h4>
            <p className="secondary-text">
              Tu lugar de descanso ideal y comodidad
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Enlaces de interés</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="#inicio" className="text-white text-decoration-none">
                  {" "}
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#habitaciones"
                  className="text-white text-decoration-none"
                >
                  {" "}
                  Habitaciones
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-white text-decoration-none"
                >
                  {" "}
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white text-decoration-none">
                  {" "}
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Contáctanos</h5>
            <p className="secondary-text mb-1">Colombia</p>
            <p className="secondary-text mb-1">contacto@hotelparaiso.com</p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="secondary-text mb-0">
            @ {new Date().getFullYear()} Hotel Paraiso. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
