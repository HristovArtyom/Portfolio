import './cardabout.scss';
import {ReactComponent as FirstLogo} from '../../images/about-first.svg';
import {ReactComponent as SecondLogo} from '../../images/about-second.svg';
import {ReactComponent as ThirdLogo} from '../../images/about-third.svg';


const CardAbout = () => {
  const cardsArr = [
    {
      logo:<FirstLogo/>,
      title: "Years experience",
      number: "1"
    },
    {
      logo:<SecondLogo/>,
      title: "Completed projects",
      number: "4"
    },
    {
      logo:<ThirdLogo/>,
      title: "Companies worked",
      number: "1"
    }
  ]
  
  return(
    <div className="cards__about">
      {cardsArr.map((item, index) =>
        <div className="card__about" key={index}>
          <span className="card__img">
            {item.logo}
          </span>
          <div className="description">
            <p className="card__description">{item.title}</p>
            <p className="card__num">{item.number}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardAbout;