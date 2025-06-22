import { Element } from "react-scroll";

export default function AboutSection() {
  return (
    <Element name="about">
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-images">
              <img
                src="Images/Rectangle 8-1.png"
                alt="Architectural detail"
                className="about-img"
              />
              <img
                src="Images/Rectangle 9.png"
                alt="Modern building facade"
                className="about-img"
              />
              <img
                src="Images/Rectangle 10.png"
                alt="Architectural pattern"
                className="about-img"
              />
            </div>

            <div className="about-text">
              <h2 className="section-title">About</h2>
              <div className="about-description">
                <p>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
              <a href="#" className="read-more-btn">
                READ MORE →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
