import React from "react";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1>Contact Me</h1>

      <div className="contact-container">
        <div className="contact-icon">
          <a href="rockmusic2090@gmail.com" target="_blank">
            <i class="fas fa-envelope-square icon"></i>
          </a>
        </div>
        <div className="contact-icon">
          <a href="https://www.linkedin.com/in/nobuyuki-tono/" target="_blank">
            <i class="fab fa-linkedin icon"></i>
          </a>
        </div>
        <div className="contact-icon">
          <a href="https://github.com/nobuyuki-tono" target="_blank">
            <i class="fab fa-github-square icon"></i>
          </a>
        </div>

        <div className="contact-icon">
          <a href="https://twitter.com/nobu_love_rock" target="_blank">
            <i class="fab fa-twitter-square icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
