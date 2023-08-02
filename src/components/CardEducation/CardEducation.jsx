import './cardeducation.scss';
import {ReactComponent as Calendar} from '../../images/calendar.svg';
import {ReactComponent as File} from '../../images/file.svg';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Diplom from '../../images/diplom-merged.pdf';


const EduCard = () => {
  const cardsArr = [
    {
      title: "FrontEnd",
      place: "Odessa - Beetroot Academy",
      date: "2023"
    },
    {
      title: "Programming Robotics",
      place: "Zaporizhia - Yaskawa, Motoman",
      date: "2021"
    },
    {
      title: "Automation",
      place: "Odessa - ONPU University",
      date: "2003-2008"
    }
  ]

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <div className="cards__edu"  onClick={handleShow}>
        {cardsArr.map((item, index) =>
          <div className="card__edu" key={index}>
            <p className="card__edu--title">{item.title}</p>
            <div className="card__edu--diplom">
              <p className="card__edu--diplom-title">Diplom</p>
              <File />
            </div>
            <p className="card__edu--place">{item.place}</p>
            <div className="card__edu--calendar">
              <Calendar />
              <p className="card__edu--date">{item.date}</p>
            </div>
          </div>
        )}
      </div>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Diplom</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe className='iframe' src={Diplom} title='Diplom'></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default EduCard;