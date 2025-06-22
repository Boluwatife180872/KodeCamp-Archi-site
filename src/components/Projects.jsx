export default function ProjectsSection() {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>

        <div className="projects-grid">
          <div className="project-item project-item-1">
            <img
              src="Images\Rectangle 12.png"
              alt="Sample Project"
              className="project-img"
            />
            <div className="project-overlay">
              <div>
                <h3 className="project-title">Sample Project</h3>
                <p className="project-subtitle">VIEW MORE</p>
              </div>
            </div>
          </div>

          <div className="project-item project-item-2">
            <img
              src="Images\image 15.png"
              alt="Modern architecture"
              className="project-img"
            />
          </div>

          <div className="project-item project-item-3">
            <img
              src="Images\image 16.png"
              alt="Colorful building"
              className="project-img"
            />
          </div>

          <div className="project-item project-item-4">
            <img
              src="Images\image 17.png"
              alt="Urban development"
              className="project-img"
            />
          </div>

          <div className="project-item project-item-5">
            <img
              src="Images\image 18.png"
              alt="Modern structure"
              className="project-img"
            />
          </div>
        </div>

        <div className="projects-cta">
          <button className="all-projects-btn">ALL PROJECTS →</button>
        </div>
      </div>
    </section>
  )
}
