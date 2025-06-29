const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <img src="src/assets/img/capo-blanco-1024x500.png" alt="" />
                <p>
                  Alonso de Cordova 4225, Vitacura. Stg. Chile.
                  <br />
                  <strong>Teléf:</strong> +569 920323333
                  <br />
                  <strong>Correo:</strong> contacto@capogrossi.cl
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Links Corporativos</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Acerca de nosotros</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Reservas</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Políticas Internas</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Nuestros Servicios</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Eventos especiales</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Menu</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Nuestras Novedades</h4>
              <p>
                Entérate primero de nuestras novedades, productos de temporada y
                actualizaciones de nuestra carta directamente a tu correo.
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong>Capogrossi</strong>. Todos
          los derechos reservados.
        </div>
        <div className="credits">
          Diseñado por <a href="https://lagmedia.cl">LAG Media</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
