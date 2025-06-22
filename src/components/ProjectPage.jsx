"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
  }

  return (
    <section className="projects-page">
      <div className="container">
        <div className="projects-header">
          <div className="projects-title-section">
            <p className="projects-subtitle">Our</p>
            <h1 className="projects-title">Projects</h1>
          </div>
        </div>

        <div className="projects-showcase">
          {/* Project 1 */}
          <div className="project-showcase">
            <div className="project-image-container">
              <img src="Images\image 30.png" alt="Sample Project" className="project-showcase-image" />
            </div>
            <div className="project-details">
              <h2 className="project-showcase-title">Sample Project</h2>
              <p className="project-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <button className="view-more-btn">VIEW MORE →</button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-showcase">
            <div className="project-image-container">
              <img src="Images\image 33.png" alt="Sample Project 2" className="project-showcase-image" />
            </div>
            <div className="project-details">
              <h2 className="project-showcase-title">Sample Project 2</h2>
              <p className="project-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <button className="view-more-btn">VIEW MORE →</button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-showcase">
            <div className="project-image-container">
              <img src="Images\image 32.png" alt="Sample Project 3" className="project-showcase-image" />
            </div>
            <div className="project-details">
              <h2 className="project-showcase-title">Sample Project 3</h2>
              <p className="project-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <button className="view-more-btn">VIEW MORE →</button>
            </div>
          </div>
        </div>

        <div className="projects-navigation">
          <div className="page-info">
            <span className="current-page">0{currentPage}</span>
            <span className="page-separator">/</span>
            <span className="total-pages">0{totalPages}</span>
          </div>

          <div className="nav-controls">
            <button className="nav-btn" onClick={handlePrevPage} disabled={currentPage === 1}>
              <ChevronLeft size={20} />
            </button>
            <button className="nav-btn" onClick={handleNextPage} disabled={currentPage === totalPages}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
