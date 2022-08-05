import React from 'react';
import Layout from './Layout';
import '../styles/style.css';

const Contact = () => {
  return (
    <Layout>
      {/* // <!-- Contact section--> */}
      <section className='bg-light py-5'>
        <div className='container px-5 my-5 px-5'>
          <div className='text-center mb-5'>
            <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
              <i className='bi bi-envelope'></i>
            </div>
            <h2 className='fw-bolder'>Get in touch</h2>
            <p className='lead mb-0'>We'd love to hear from you</p>
          </div>
          <div className='row gx-5 justify-content-center'>
            <div className='col-lg-6'>
              <form id='contactForm'>
                {/* <!-- Name input--> */}
                <div className='form-floating mb-3'>
                  <input
                    className='form-control'
                    id='name'
                    type='text'
                    placeholder='Enter your name...'
                    data-sb-validations='required'
                  />
                  <label htmlFor='name'>Full name</label>
                  <div
                    className='invalid-feedback'
                    data-sb-feedback='name:required'
                  >
                    A name is required.
                  </div>
                </div>
                {/* <!-- Email address input--> */}
                <div className='form-floating mb-3'>
                  <input
                    className='form-control'
                    id='email'
                    type='email'
                    placeholder='name@example.com'
                    data-sb-validations='required,email'
                  />
                  <label htmlFor='email'>Email address</label>
                  <div
                    className='invalid-feedback'
                    data-sb-feedback='email:required'
                  >
                    An email is required.
                  </div>
                  <div
                    className='invalid-feedback'
                    data-sb-feedback='email:email'
                  >
                    Email is not valid.
                  </div>
                </div>
                {/* <!-- Phone number input--> */}
                <div className='form-floating mb-3'>
                  <input
                    className='form-control'
                    id='phone'
                    type='tel'
                    placeholder='(123) 456-7890'
                    data-sb-validations='required'
                  />
                  <label htmlFor='phone'>Phone number</label>
                  <div
                    className='invalid-feedback'
                    data-sb-feedback='phone:required'
                  >
                    A phone number is required.
                  </div>
                </div>
                {/* <!-- Message input--> */}
                <div className='form-floating mb-3'>
                  <textarea
                    className='form-control'
                    id='message'
                    type='text'
                    placeholder='Enter your message here...'
                    style={{height: '10rem'}}
                    
                  ></textarea>
                  <label htmlFor='message'>Message</label>
                </div>
              
                {/* <!-- Submit Button--> */}
                <div className='d-grid'>
                  <button
                    className='btn btn-primary btn-lg disabled'
                    id='submitButton'
                    type='submit'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
