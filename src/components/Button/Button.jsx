import './button.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Button = ({ text, to, onClick, target}) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseOver = () => {
    setHover(false);
  }
 

  return <Link to={to} target={target} className="button" onClick={onClick}>{text}</Link>
}

export default Button;