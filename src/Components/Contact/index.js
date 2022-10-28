import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Maps from '../Maps'

const Contact = () => {
  const strArray = 'Contact Me'.split('')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_xrr4czu',
        'template_x0wg0kt',
        refForm.current,
        'lvb5khjxZZfqSBDBk'
      )
      .then(
        () => {
          alert('Message Sent Successfully')
          window.location.reload('false')
        },
        () => {
          alert('Failed to send message, please try again.')
        }
      )
  }
  return (
    <div className="containers contact-page">
      <div className="text-zones">
        <h1>
          <AnimatedLetters
            strArray={strArray}
            letterClass={letterClass}
            idx={15}
          />
        </h1>
        <p>
          I'd love to hear from you. If you have any queries or questions just
          get in touch. Make sure that you leave your email address, so I can
          get back to you. Thanks!
          <br />
        </p>
        <div className="contact-forms">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="halfs">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="halfs">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  className="textarea-form"
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-buttons" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="info-maps">
        mohdaman02@outlook.com
        <br />
        Muhammad Aman
        <br />
        Karachi, Pakistan
        <br />
      </div>
      <div className="map-wrap">
        <Maps></Maps>
      </div>
    </div>
  )
}

export default Contact
