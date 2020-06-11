import React from "react";
import Hero from "../components/Hero";
import contactImg from "../images/contactBcg.jpeg";
import ContactForm from "../components/ContactPage/ContactForm";

const ContactPage = (props) => {
  return (
    <>
      <Hero img={contactImg} />
      <ContactForm />
    </>
  );
};

export default ContactPage;
