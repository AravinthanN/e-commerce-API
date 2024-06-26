import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Contact() {

  const latitude = 12.834216046821386; 
  const longitude = 80.23031862907797; 
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNzfCsDU3JzA4LjciTiAxMjLCsDIyJzMwJzQyLjAiVw!5e0!3m2!1sen!2sus!4v1694262053143!5m2!1sen!2sus`;

  return (
    <>
      {/* <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status"></div>
      </div> */}
    <Header></Header>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Contact</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><a href="/AllProduct">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item active text-white">Contact</li>
        </ol>
      </div>

      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div className="text-center mx-auto" style={{ maxWidth: '700px' }}>
                  <h1 className="text-primary">Get in touch</h1>
                  <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code, and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="h-100 rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ height: '400px' }}
                    src={mapUrl}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-7">
                <form action="" className="">
                  <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
                  <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" />
                  <textarea className="w-100 form-control border-0 mb-4" rows="5" cols="10" placeholder="Your Message"></textarea>
                  <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">Submit</button>
                </form>
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Address</h4>
                    <p className="mb-2">123 Street New York.USA</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Mail Us</h4>
                    <p className="mb-2">info@example.com</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded bg-white">
                  <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Telephone</h4>
                    <p className="mb-2">(+012) 3456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
      

      <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>
    </>
  );
}