import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "animate.css";

const WhatsAppButton = () => {
  const renderTooltip = (props) => {
    if (!props) return null;
    return (
      <Tooltip id="button-tooltip" {...props}>
        <b>Hola!</b>
        <br />
        Deseas reservar una mesa?
        <br />
        <b>Escríbenos !</b>
      </Tooltip>
    );
  };

  return (
    <>
      <OverlayTrigger
        placement="left"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}>
        <a
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=56920390272&text=Hola, Hola, bienvenido a Capogrossi deseas reservar? 😀"
          className="btn-wsp animate__animated animate__tada animate__infinite animate__slower animate__delay-3s"
          target="_blank">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/wa_chat_icon.png?alt=media&token=ce6cb743-6822-4223-9279-0bdd5efe6677"
            alt=""
            className="wsp-image"
          />
        </a>
      </OverlayTrigger>
    </>
  );
};

export default WhatsAppButton;
