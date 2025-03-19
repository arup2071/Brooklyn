import React, { useRef } from "react";
import Input from "./utils/input";
import { GoPaperAirplane } from "react-icons/go";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Heading from "./utils/Heading";
import Detail from "./utils/Detail";
import ContactCard from "./utils/ContactCard";
import {
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

// Social links array
const socialLinks = [
  {
    id: 1,
    url: "#",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    url: "#",
    icon: <FaDribbble />,
  },
  {
    id: 3,
    url: "#",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: "#",
    icon: <FaLinkedinIn />,
  },
  {
    id: 5,
    url: "#",
    icon: <FaBehance />,
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const requiredFields = [
      "user_name",
      "user_email",
      "location",
      "budget",
      "subject",
      "message",
    ];
    let isEmpty = false;

    // Check empty fields
    requiredFields.forEach((field) => {
      if (!formData.get(field)?.trim()) {
        isEmpty = true;
      }
    });

    if (isEmpty) {
      Swal.fire({
        title: "Incomplete Form",
        text: "Please fill out all required fields before submitting.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    // Validate email format
    const email = formData.get("user_email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    // Validate budget
    const budget = parseFloat(formData.get("budget"));
    if (isNaN(budget) || budget <= 0) {
      Swal.fire({
        title: "Invalid Budget",
        text: "Please enter a valid positive number for the budget.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    // Confirmation
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to send this message?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sending...",
          text: "Please wait while we send your message.",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        emailjs
          .sendForm("service_5iqzurn", "template_jzr193e", form.current, {
            publicKey: "3IaiSC9BIwOprWhSI",
          })
          .then(
            () => {
              Swal.fire(
                "Message Sent!",
                "Your message has been sent successfully.",
                "success"
              );
              form.current.reset();
            },
            (error) => {
              Swal.fire(
                "Failed!",
                "Something went wrong. Please try again.",
                "error"
              );
              console.log("FAILED...", error.text);
            }
          );
      }
    });
  };

  return (
    <section className="relative z-10">
      <div className="container rounded-[15px] shadow-contact bg-gray-50">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-[100px] p-6 sm:p-8 md:p-12 lg:p-[88px]">
          {/* Left Side */}
          <div className="contactCnt flex flex-col justify-between h-full">
            <div className="">
              {/* Heading and Detail Centered on Small Screens */}
              <Heading className="pb-4">Let’s discuss your Project</Heading>
              <Detail className="pb-[35px]">
                There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alteration.
              </Detail>
              <div>
                <ContactCard Ques="Address:" Ans="New Mexico 31134" />
                <ContactCard Ques="My Email:" Ans="myem@gmail.com" />
                <ContactCard Ques="Call Me Now:" Ans="00-1234 00000" />
              </div>
            </div>

            {/* Social Icons at Bottom */}
            <div className="social flex gap-3 mt-[35px] sm:justify-center">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="w-12 h-12 text-lg bg-transparent hover:text-white hover:bg-primary-500 transition-colors duration-300 rounded-sm text-primary-500 grid place-items-center shadow-contact-social"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="contactForm">
            <p className="mb-[38px] sm:text-center">
              There are many variations of passages of Lorem Ipsu available, but
              the majority have suffered alteration.
            </p>

            <form ref={form} onSubmit={sendEmail}>
              <Input placeholder="Your Name *" name="user_name" />
              <Input
                placeholder="Your Email *"
                type="email"
                name="user_email"
              />
              <Input placeholder="Your Location *" name="location" />
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
                <Input placeholder="Budget *" name="budget" type="number" />
                <Input
                  placeholder="Subject *"
                  name="subject"
                  className="md:col-span-2"
                />
              </div>
              <Input placeholder="Message *" name="message" />
              <button
                type="submit"
                className="btn mt-[38px] !flex gap-3 items-center font-extrabold bg-transparent text-primary-500 border border-color-primary-500"
              >
                Submit
                <GoPaperAirplane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
