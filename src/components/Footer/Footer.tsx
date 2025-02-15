import githubIcon from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import reactIcon from "../../assets/react-icon.svg";
import whatsapp from "../../assets/whatsapp.svg";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://abfcodes.com" className="logo">
        <span>abfcodes</span>
        <span>.com</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/abfcodes/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/AbfCodes/" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B923096560780&text=Hello+Abdul+Basit"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
      </div>
    </Container>
  );
}
