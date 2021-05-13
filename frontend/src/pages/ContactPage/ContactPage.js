import React from 'react';
import Footer from '../../components/Footer/Footer';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <>
      <section className='contact-section'>
        <div className='field-container'>
          <div className='contact-title'>
            <h3 className='title'>TELL US YOUR DESIRE</h3>
            <div className='underline'></div>
          </div>
          <form className='contact-form'>
            <div className='row-container'>
              <input name='name' type='text' placeholder='Name' />
              <input name='email' type='email' placeholder='Email' />
            </div>
            <div className='row-container'>
              <input name='phone' type='text' placeholder='Phone' />
              <input name='subject' type='text' placeholder='Subject' />
            </div>
            <div className='text-area'>
              <textarea name='message' placeholder='Message'></textarea>
            </div>

            <div className='contact-submit-btn'>
              <button className='btn contact-btn' type='submit'>
                SEND EMAIL
              </button>
              <p className='form-messege'></p>
            </div>
          </form>
        </div>

        <div className='contact-info'>
          <div className='contact-title'>
            <h3 className='title'>CONTACT US</h3>
            <div className='underline'></div>
          </div>
          <div className='contact-dec'>
            <p>
              Feel free to drop us a line! We will get back to you within 24
              hours
            </p>
          </div>
          <div className='contact-address'>
            <ul>
              <li>Address : Bishara Sreet 133/2 Nakuru City</li>
              <li>Email: jumamoses529@gmail.com</li>
              <li>Phone: +254 712312336</li>
            </ul>
          </div>
          <div className='work-hours'>
            <h5>Working hours</h5>
            <p>
              <strong>Monday &ndash; Saturday</strong>: &nbsp;08AM &ndash; 21PM
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
