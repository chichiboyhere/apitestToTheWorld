import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import assets from "../assets";


const ContactPage = () => {
  return (
    <>
      <SectionWrapper
        title="Reach out to us"
        description="We gladly welcome any message from you. Whether it is a suggestion for the improvement of the site aesthetically, functionally or content-wise, or an application to work with us in any capacity. Please feel free to send your message to us via the form below. You can also make a call via any of the phone lines below or send a WhatsApp message. Thanks in anticipation of your message."
        mockupImg={assets.contact}
        banner="banner"
      />
     
    </>
  );
};

export default ContactPage;
