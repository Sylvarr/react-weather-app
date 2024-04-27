import languages from "./languageObject.js";
import "./App.css";
const curentYear = new Date().getFullYear();

const Footer = ({ language }) => {
  const { footer } = languages[language];
  return (
    <footer className="footer">
      <p>
        {curentYear} {footer}
      </p>
    </footer>
  );
};
export default Footer;
