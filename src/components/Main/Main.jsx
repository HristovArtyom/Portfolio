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
import ExamplePdf from '../../images/FrontEnd Artem Khristov.pdf';

const Main = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const ID_KEY = process.env.REACT_APP_ID_KEY
  const HASH_KEY = process.env.REACT_APP_HASH_KEY

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

    emailjs.sendForm(`${HASH_KEY}`, `${ID_KEY}`, form.current, `${API_KEY}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'FrontEnd Artem Khristov CV';
    link.href = ExamplePdf;
    link.click();
  };

  const style = {    
    dark: {
      filter: "invert(1)",
    },
    light: {
      filter: "invert(0)",
    }
  };

  return(
    <main className={`main main__${theme.theme}`} style={theme.theme === 'dark' ? style.light : style.dark}>
      <Container>
        <div className="main__wrapper">
          <aside className="aside">
            <div className="img">
              <img className={`img__user img__${theme.theme}`} src={Photo} alt="" />
            </div>
              <h2 className="user__name">Artyom Hristov</h2>
              <p className="user__title">Frontend Developer</p>
              <p className="user__info">Hello. I'm responsible for assisting with the creation of websites and updating existing web applications using scripting languages. </p>
            <div className="user__social">
              <Social />
            </div>
            <Button onClick={() => handleDownload()} text="Resume"></Button>
            <Button onClick={() => handleShow()} text="Contact me"></Button>
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