import './cardskills.scss';
import {ReactComponent as Html} from '../../images/html.svg';
import {ReactComponent as Css} from '../../images/css.svg';
import {ReactComponent as Scss} from '../../images/scss.svg';
import {ReactComponent as Js} from '../../images/js.svg';
import {ReactComponent as Rct} from '../../images/react.svg';
import {ReactComponent as Bootstrap} from '../../images/bootstrap.svg';
import {ReactComponent as Jq} from '../../images/jquery.svg';
import {ReactComponent as Git} from '../../images/github.svg';
import {ReactComponent as Material} from '../../images/mui.svg';
import {ReactComponent as Figma} from '../../images/figma.svg';
import { useState } from 'react';

const CardSkills = () => {
  const cardsArr = [
    {
      svg: <Html />,
      title: "HTML",
      rate: 0
    },
    {
      svg: <Css />,
      title: "CSS",
      rate: 0
    },
    {
      svg: <Scss />,
      title: "Scss",
      rate: 0
    },
    {
      svg: <Js />,
      title: "JavaScript",
      rate: 30
    },
    {
      svg: <Rct />,
      title: "React",
      rate: 30
    },
    {
      svg: <Bootstrap />,
      title: "Bootstrap",
      rate: 15
    },
    {
      svg: <Jq />,
      title: "JQuery",
      rate: 15
    },
    {
      svg: <Git />,
      title: "GitHub",
      rate: 10
    },
    {
      svg: <Material />,
      title: "Material UI",
      rate: 10
    },
    {
      svg: <Figma />,
      title: "Figma",
      rate: 0
    }
  ]

  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

   return(
    <div className="skills__cards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {cardsArr.map((item, index) => 
        <div className="skills__card" key={index}>
          {item.svg}
          <p className="skills__title">{item.title}</p>
          <div className="scale">
            <div className="meter" style={{transform: isHover ? `translateX(-${item.rate}%)` : `translateX(-100%)`, transition: '1s'}}></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardSkills;