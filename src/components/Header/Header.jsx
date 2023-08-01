import './header.scss';
import Container from '../Container/Container';
import Nav from '../Navigation/Navigation';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ThemeContext } from '../../App';

const Header = () => {
  const theme = useContext(ThemeContext);

  const [checked, setChecked] = useState("");
  const [menu, setMenu] = useState("hide");

  const handleChange = () => {
    setChecked(!checked);
    theme.setTheme(checked ? 'dark' : 'light');
  };

  const openMenu = () => {
    if(menu === "hide") {
      setMenu("open");
    } else {
      setMenu("hide");
    }
  }

  return(
    <header className={`header header__${theme.theme}`}>
      <Container>
        <div className="header__wrapper">
          <Link to="/" className="header__name">Artyom Hristov</Link>
          <nav className="nav">
            <ul className={`nav__list ${menu}`}>
              <Nav to='/' link='About'/>
              <Nav to='/skills' link='Skills'/>
              <Nav to='/portfolio' link='Portfolio'/>
            </ul>
            {/* <div className={`burger burger__${menu}`} onClick={openMenu}> */}
              {/* <span className="burger__menu"></span>
              <span className="burger__menu"></span>
              <span className="burger__menu"></span> */}

              <div className={`center center__${menu}`} onClick={openMenu}>
                <div></div>
              </div>

            {/* </div> */}
            <Form className='switch'>
              <Form.Check onChange={handleChange}
                checked={checked}
                type="switch"
                id="custom-switch"
                value="false"
              />
            </Form>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header;