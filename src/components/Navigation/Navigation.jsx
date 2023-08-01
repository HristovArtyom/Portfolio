import './navigation.scss';
import { Link } from 'react-router-dom';

const Nav = ({ to, link }) => {
  return (
    <li className="nav__item">
      <Link to={to} className="nav__link">{link}</Link>
    </li>
  )
}

export default Nav;