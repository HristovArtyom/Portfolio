import './container.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Container = ({ children }) => {
  const theme = useContext(ThemeContext);

  return <div className={`wrapper wrapper__${theme.theme}`}>{children}</div>;
}

export default Container;