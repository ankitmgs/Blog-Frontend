import React from "react";
import { Card } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1g3skqi",
        "template_8rk2pkr",
        form.current,
        "amFDbWSKIep9h8TPb"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Text send Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <main id="main">
        <section id="contact" className="contact mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center mb-5">
                <h1 className="text-6xl mt-10 font-bold">Contact us</h1>
              </div>
            </div>
            <div className="row gy-4">
              <div className="col-md-4">
                <div className="info-item flex flex-col items-center">
                  <i className="mr-2">
                    <FaMapMarkerAlt size={50} />
                  </i>
                  <div>
                    <h3 className="font-bold text-2xl">Address</h3>
                    <address>A108 Adam Street, NY 535022, USA</address>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-item flex flex-col items-center">
                  <i className="mr-2">
                    <BsPhone size={50} />
                  </i>
                  <div>
                    <h3 className="font-bold text-2xl">Phone Number</h3>
                    <address>+1 5589 55488 55</address>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-item flex flex-col items-center">
                  <i className="mr-2">
                    <AiOutlineMail size={50} />
                  </i>
                  <div>
                    <h3 className="font-bold text-2xl">Email</h3>
                    <address>Anfo@example.com</address>
                  </div>
                </div>
              </div>
            </div>
            <Card className=" shadow-lg">
              <div className="form mt-5">
                <form className="m-3" ref={form} onSubmit={sendEmail}>
                  <div className="row w-full ">
                    <div className="col-md-6 ">
                      <input
                        type="text"
                        name="name"
                        className="border  border-y-8 py-2 px-20 w-full"
                        id="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="border  border-y-8 py-2 px-20 w-full "
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="border  border-y-8 py-2 px-20 w-full mt-2"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="border  border-y-8 py-2 px-20 w-full mt-2"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      required=""
                      defaultValue={""}
                    />
                  </div>

                  <div className="flex justify-center">
                    <div className="text-center border border-dotted bg-blue-950 w-1/5 rounded-sm text-white p-2">
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </Card>

            {/* End Contact Form */}
          </div>
        </section>
      </main>
      {/* End #main */}
    </div>
  );
};

export default Contact;
