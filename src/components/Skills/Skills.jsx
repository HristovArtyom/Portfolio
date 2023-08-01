import './skills.scss';
import CardSkills from '../CardSkills/CardSkills';

const Skills = () => {
  return(
    <div className="skills">
      <h3 className="skills__h3">Skills</h3>
      <p className="skills__subtitle">My technical level</p>
      <h3 className="skills__h3">Frontend Developer</h3>
      
        <CardSkills />
      
    </div>
  )
}

export default Skills;