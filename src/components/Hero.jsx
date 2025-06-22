import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div>
              <p className="hero-subtitle">PROJECT</p>
              <h1 className="hero-title">Lorum</h1>
            </div>

            <div className="hero-controls">
              <button className="control-btn">
                <ChevronLeft size={16} />
              </button>
              <button className="control-btn">
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="hero-pagination">
              <span>01</span>
              <div className="pagination-line"></div>
              <span>02</span>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="Images/Rectangle 6.png"
              alt="Modern architectural building"
              className="hero-img"
            />
            <div className="view-project">VIEW PROJECT →</div>
          </div>
        </div>
      </div>
    </section>
  );
}
