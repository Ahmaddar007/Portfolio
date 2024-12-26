import React, { useRef } from "react";
import emailjs from "emailjs-com";
import phone from "../assets/smartphone.png";
import mail from "../assets/mail.png";
import address from "../assets/location.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import github from "../assets/github.png";
import Button from "../elements/Button";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2werf2e", // Replace with your EmailJS service ID
        "template_fm4jdrb", // Replace with your EmailJS template ID
        form.current,
        "ClfD5CisDbtbid5eX" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Message Sent", result.text);
          alert("Email sent successfully!");
          e.target.reset(); // Reset form after submission
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center text-white my-20 bg-[#032543] mx-5 sm:mx-20 p-10 rounded-xl font-Mont border-2 border-[#0287f4] animate__animated animate__fadeIn"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl m-5 font-semibold text-center animate__animated animate__fadeInUp">
        Share your Query with me
      </h1>
      <div className="h-0.5 bg-white w-full sm:w-[70rem] rounded-full mb-10"></div>
      <div className="flex flex-col sm:flex-row gap-14 justify-center items-center animate__animated animate__fadeInUp">
        <div className="space-y-3 mt-10 text-center sm:text-left">
          <div className="flex flex-col justify-center items-center gap-3 hover:scale-105 transition-transform duration-300">
            <img src={phone} className="w-10 h-10" alt="phone" />
            <p className="text-xl">+92 301-3656698</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 hover:scale-105 transition-transform duration-300">
            <img src={mail} className="w-10 h-10" alt="email" />
            <p className="text-xl">ahmadsajjaddar@gmail.com</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 hover:scale-105 transition-transform duration-300">
            <img src={address} className="w-10 h-10" alt="location" />
            <p className="text-xl">Faisalabad, Pakistan</p>
          </div>
          <div className="flex my-5 justify-center items-center gap-5 py-3">
            <button className="hover:scale-105 transition-transform duration-300">
              <a href="https://www.linkedin.com/in/ahmad-sajjad-a1b46b247/">
                <img src={linkedin} className="w-8 h-8" alt="LinkedIn" />
              </a>
            </button>
            <button className="hover:scale-105 transition-transform duration-300">
              <a href="https://wa.me/+923013656698">
                <img src={whatsapp} className="w-8 h-8" alt="WhatsApp" />
              </a>
            </button>
            <button className="hover:scale-105 transition-transform duration-300">
              <a href="https://github.com/Ahmaddar007">
                <img src={github} className="w-8 h-8" alt="GitHub" />
              </a>
            </button>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="sm:w-[40rem] w-full">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="mb-1 text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-500 bg-opacity-50 backdrop-blur-md text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
                placeholder=" Name *"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="mb-1 text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-500 bg-opacity-50 backdrop-blur-md text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
                placeholder=" Email *"
              />
            </div>
          </div>
          <div className="flex flex-col my-5">
            <label htmlFor="subject" className="mb-1 text-lg">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="bg-gray-500 bg-opacity-50 backdrop-blur-md text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
              placeholder=" Subject *"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-lg">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              className="bg-gray-500 bg-opacity-50 backdrop-blur-md text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
              placeholder=" Message *"
            ></textarea>
          </div>
          <div className="flex justify-end my-8">
            <Button text="Send" style={{ width: "100%" }} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
