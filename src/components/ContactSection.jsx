import { useTranslation } from "react-i18next";
import { FaCarAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ContactSection = () => {
  const [t] = useTranslation("global");
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.title_2")}</p>
          <h4>
            <FaCarAlt /> Valet Parking
          </h4>
        </div>
      </div>

      <div data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.2396479240871!2d-70.58963742778704!3d-33.40353253205285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf30819cc9e1%3A0x580123b11df0b70b!2sAlonso%20de%20C%C3%B3rdova%204225%2C%207630524%20Vitacura%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1703748062197!5m2!1ses-419!2scl"
          border="0"
          allowFullScreen
          className="iframe-map"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
