import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2><center>Contact Me</center></h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;