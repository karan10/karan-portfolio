const Contact = () => (
  <main>
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <a href="mailto:karandev43@gmail.com">
          <i className="fas fa-envelope"></i>
          karandev43@gmail.com
        </a>
        <a href="https://linkedin.com/in/karandev" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
          linkedin.com/in/karandev
        </a>
        <a href="https://x.com/iamkarandev" target="_blank" rel="noreferrer">
          <i className="fab fa-x-twitter"></i>
          x.com/iamkarandev
        </a>
      </div>
      <div className="contact-content">
        <form id="contact-form" className="contact-form">
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" id="subject" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  </main>
);

export default Contact;
