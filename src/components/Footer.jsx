import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';
import github from '../img/github.png';
import instagram from '../img/instagram.png';
import whatsapp from '../img/whatsapp.png';

function Footer() {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="Footer">
      <img
        className="Image"
        src={github}
        alt="my Github"
        onClick={() => openLink("https://github.com/muslimELHADHARI")}
      />
      <img
        className="Image"
        src={linkedin}
        alt="my Linkedin"
        onClick={() => openLink("https://www.linkedin.com/in/elhadhari-muslim-517b642a9/")}
      />
      <img
        className="Image"
        src={whatsapp}
        alt="my Whatsapp"
        onClick={() => openLink("https://wa.me/qr/HUGF5QEY7EZRJ1")}
      />
      <img
        className="Image"
        src={facebook}
        alt="my Facebook"
        onClick={() => openLink("https://www.facebook.com/muslim.elhadhri/")}
      />
      <img
        className="Image"
        src={instagram}
        alt="my Instagram"
        onClick={() => openLink("https://www.instagram.com/muslim_elhadhari/")}
      />
      <h1 className="author-name">Created by ELHADHARI Muslim</h1>
    </div>
  );
}

export default Footer;
