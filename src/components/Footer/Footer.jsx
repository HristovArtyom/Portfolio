import './footer.scss';
import Container from '../Container/Container';
import Social from '../Social/Social';

const Footer = () => {
  return(
    <footer className="footer">
      <h1 className="footer__h1">Artyom Hristov</h1>
      <Social />
    </footer>
  )
}

export default Footer;