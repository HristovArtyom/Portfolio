import './footer.scss';
import Social from '../Social/Social';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return(
    <footer className="footer">
      <HashLink to="/Portfolio#" className="footer__h1">Artyom Hristov</HashLink>
      <Social />
    </footer>
  )
}

export default Footer;