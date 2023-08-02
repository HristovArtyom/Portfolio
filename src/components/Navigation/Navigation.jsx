import './navigation.scss';
import { HashLink } from 'react-router-hash-link';

const Nav = ({ to, text }) => {
  return (
    <li className="nav__item">
      <HashLink to={to} className="nav__link">{text}</HashLink>
    </li>
  )
}

export default Nav;