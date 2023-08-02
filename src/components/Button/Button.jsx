import './button.scss';
import { Link } from 'react-router-dom';

const Button = ({ text, to, onClick, target}) => {

  return <Link to={to} target={target} className="button" onClick={onClick}>{text}</Link>
}

export default Button;