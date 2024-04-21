import "./App.css";
const curentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>{curentYear} Weather App</p>
    </footer>
  );
};
export default Footer;
