import React from 'react'
import { Button } from '@material-ui/core'
import './index.scss'
import { useForm } from '@formspree/react'

const Contact = () => {
  // api from Formspree
  const [state, handleSubmit] = useForm('xjvqkegl')
  if (state.succeeded) {
    return (
      <h1 style={{ marginTop: '49vh', marginLeft: '6vw', color: '#FDB515' }}>
        Thank you for reaching out!
        <br />
        Let's keep in touch!
      </h1>
    )
  }

  return (
    <>
      <div className="container contact-page">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            height: '100%',
          }}
        >
          <div className="text-zone">
            <h1>Contact Me</h1>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <ul>
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
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
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                </ul>
                <Button style={{ width: '100%' }}>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                    style={{
                      fontSize: '21px',
                      padding: '10px 20px',
                      width: '100%',
                    }}
                  />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
