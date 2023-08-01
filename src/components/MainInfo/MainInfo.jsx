import './maininfo.scss';
import CardAbout from '../CardAbout/CardAbout';
import CardEdu from '../CardEducation/CardEducation';
import {ReactComponent as Education} from '../../images/education.svg';
import {ReactComponent as Work} from '../../images/work.svg';

const MainInfo = () => {  
  return(
    <div className="about">
      <h3 className="about__h3">About</h3>
      <p className="about__subtitle">Web developer, with extensive knowledge and years of experience, working in web technologies and UI/UX design, delivering quality work.</p>
      <CardAbout />
      <h3 className="about__h3">Qualification</h3>
      <p className="about__subtitle">My personal journey</p>
      <div className="about__btn">
        <Education/>
        <p className="about__btn--education">
          Education
        </p>
       </div>
      <CardEdu />
    </div>
  ) 
}

export default MainInfo;