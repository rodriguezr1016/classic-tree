import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact () {
  const form = useRef();
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    user_name:'',
    user_email:'',
    message: '',
  });
  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true)

    emailjs
      .sendForm('service_zx2jc7m', 'template_60nek6r', form.current, {
        publicKey: 'Eqs0i9CbXZzjU6DTK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSending(false)
          setFormData({
            user_name:'',
            user_email:'',
            message:'',
          })
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='contactus'>
        <h2>Get A Free Quote Today</h2>
    <form ref={form} onSubmit={sendEmail}>
      <input placeholder='Name' type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
      <br></br>
      <input placeholder='Email' required type="email" name="user_email" value={formData.user_email} onChange={handleChange} />
      <br></br>
       <textarea placeholder='Brief description about your project with phone number and address'name="message" value={formData.message} onChange={handleChange} />
       <br />
      <input className='button'type="submit" value={sending ? 'Sending...':'Send'} />
    </form>
    </div>
  );
};