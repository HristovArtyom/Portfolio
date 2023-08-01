import './main.scss';
import Container from '../Container/Container';
import Photo from '../../images/photo.jpg';
import Social from '../Social/Social';
import MainInfo from '../MainInfo/MainInfo';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Main = () => {
  const theme = useContext(ThemeContext);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const [text, setText] = useState('Send');

  function handleShow() {
    setFullscreen(true);
    setShow(true);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setText('Sended');

    emailjs.sendForm('service_gqr7tgn', 'template_3sl6nv9', form.current, 'Xj-JmQi634Y9cEAnr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return(
    <main className={`main main__${theme.theme}`}>
      <Container>
        <div className="main__wrapper">          
          <aside className="aside">
            <div className="img">
              <img className={`img__user img__${theme.theme}`} src={Photo} alt="" />
            </div>            
              <h2 className="user__name">Artyom Hristov</h2>
              <p className="user__title">Frontend Developer</p>
              <p className="user__info">High level  experience in web design and development knowledge.</p>            
            <div className="user__social">
              <Social />
            </div>            
            <Button onClick={() => handleShow()} text="Contact me">
              Contact Me
            </Button>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>              
              <Modal.Header closeButton>
                <Modal.Title>Contact Me</Modal.Title>
              </Modal.Header>
              <Modal.Body className={`a a__${theme.theme}`}>                
                <form ref={form} onSubmit={sendEmail} className='form'>
                  <label className='form__label'>Name</label>
                  <input className='form__input'  type="text" name="user_name" placeholder='Enter your name' required/>
                  <label className='form__label'>Email</label>
                  <input className='form__input'  type="email" name="user_email" placeholder='Enter your email' required/>
                  <label className='form__label' >Message</label>
                  <textarea className='form__input form__textarea' name="message"   placeholder='Enter your message here...' maxLength="800"/>
                  <input className='form__btn' type="submit" value={text} required/>
                </form>
              </Modal.Body>
            </Modal>
          </aside>
          <section className="main__info">          
            <MainInfo />
            <Skills />
            <Portfolio />
          </section>
        </div>
        <Footer />
      </Container>
    </main>
  )
}

export default Main;