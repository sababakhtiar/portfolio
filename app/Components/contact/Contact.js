
import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b141e621-59fb-4c0d-b561-2d120354ecbc',  // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });  // Reset form fields
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section className='contact container section' id='contact'>
      <h2 className='section__title'>Get In Touch</h2>
      <div className='contact__container grid'>
        <div className='contact__info'>
          <h3 className='contact__title'> Let's Talk About Everything!</h3>
          <p className='contact__details'>Send me an email. 👋</p>
        </div>

        <form onSubmit={handleSubmit} className='contact__form'>
          <div className='contact__form-group'>
            <div className='contact__form-div'>
              <input
                type='text'
                className='contact__form-input'
                placeholder='Your Good Name Here!'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className='contact__form-div'>
              <input
                type='email'
                className='contact__form-input'
                placeholder='Insert Your Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className='contact__form-div contact__form-area'>
            <textarea
              name='message'
              cols={30}
              rows={10}
              className='contact__form-input'
              placeholder='Lets Grow Together!?'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type='submit' className='btn'>Send Message</button>
          <p>{status}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
