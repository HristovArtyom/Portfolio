import './social.scss';
import {ReactComponent as FbLogo} from '../../images/fb.svg';
import {ReactComponent as InsLogo} from '../../images/ins.svg';
import {ReactComponent as GitLogo} from '../../images/git.svg';
import { NavLink } from 'react-router-dom';

const Social = () => {
  return (
    <ul className="social__list">
      <li className="social__item">
        <NavLink to="https://www.facebook.com/Marvel/" target='_blank' className="social__link" rel="noreferrer">
          <FbLogo></FbLogo>
        </NavLink>
      </li>
      <li className="social__item">
        <NavLink to="https://www.instagram.com/marvel/" target='_blank' className="social__link" rel="noreferrer">
          <InsLogo></InsLogo>
       </NavLink>
      </li>
      <li className="social__item">
        <NavLink to="https://twitter.com/Marvel" target='_blank' className="social__link" rel="noreferrer">
          <GitLogo></GitLogo>
        </NavLink>
      </li>
    </ul>
  )
}

export default Social;