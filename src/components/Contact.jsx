import { Element } from "react-scroll";
export default function ContactSection() {
  return (
    <Element name="contact">
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>

          <div className="contact-content">
            <form className="contact-form">
              <input type="text" placeholder="Name" className="form-input" />
              <input
                type="text"
                placeholder="Phone Number*"
                className="form-input"
              />
              <input
                type="email"
                placeholder="E-mail*"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Interested In"
                className="form-input"
              />
              <textarea
                placeholder="Message*"
                className="form-input form-textarea"
              ></textarea>

              <button type="submit" className="send-btn">
                SEND EMAIL →
              </button>
            </form>

            <div className="contact-image">
              <img
                src="Images\image 12.png"
                alt="Person on phone"
                className="contact-img"
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
