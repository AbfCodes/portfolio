import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:abfcodes@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:abfcodes@gmail.com">abfcodes@gmail.com</a>
        </div>
        <div>
          <a href="tel:+923096560780">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+923096560780">(+92) 3096560780</a>
        </div>
      </div>
    </Container>
  );
}
