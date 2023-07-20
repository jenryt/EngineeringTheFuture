import React, { useState } from 'react'
import { TextField, Button, Grid, Paper, makeStyles } from '@material-ui/core'
import './index.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Here, you can handle form submission logic, like sending the data to a server or displaying a success message.
    console.log('Form data:', formData)
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
              <form
                onSubmit={handleSubmit}
                // style={{ marginTop: '50%' }}
              >
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
                      fontSize: '18px',
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
