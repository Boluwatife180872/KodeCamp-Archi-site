"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
  }

  return (
    <section className="gallery-page">
      <div className="container">
        <div className="gallery-header">
          <div className="gallery-title-section">
            <p className="gallery-subtitle">Photo</p>
            <h1 className="gallery-title">Gallery</h1>
          </div>
        </div>

        <div className="gallery-grid">
          {/* First row - 5 images */}
          <div className="gallery-item">
            <img src="Images\Rectangle 22.png" alt="Architecture 1" className="gallery-image" />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <span className="view-text">VIEW</span>
              </div>
            </div>
          </div>

          <div className="gallery-item">
            <img src="Images\Rectangle 23.png" alt="Architecture 2" className="gallery-image" />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <span className="view-text">VIEW</span>
              </div>
            </div>
          </div>

          <div className="gallery-item">
            <img src="Images\Rectangle 24.png" alt="Architecture 3" className="gallery-image" />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <span className="view-text">VIEW</span>
              </div>
            </div>
          </div>

          <div className="gallery-item">
            <img src="Images\Rectangle 25.png" alt="Architecture 4" className="gallery-image" />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <span className="view-text">VIEW</span>
              </div>
            </div>
          </div>

          <div className="gallery-item">
            <img src="Images\Rectangle 26.png" alt="Architecture 5" className="gallery-image" />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <span className="view-text">VIEW</span>
              </div>
            </div>
          </div>

          {/* Second row - 5 images */}
          <div className="gallery-item">
            <img src="Images\Rectangle 27.png" alt="Architecture 6" className="gallery-image" />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <span className="view-text">VIEW</span>
              </div>
            </div>
          </div>

          <div className="gallery-item">
            <img src="Images\Rectangle 28.png" alt="Architecture 7" className="gallery-image" />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <span className="view-text">VIEW</span>
              </div>
            </div>
          </div>

          <div className="gallery-item">
            <img src="Images\Rectangle 29.png" alt="Architecture 8" className="gallery-image" />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <span className="view-text">VIEW</span>
              </div>
            </div>
          </div>

          <div className="gallery-item">
            <img src="Images\Rectangle 30.png" alt="Architecture 9" className="gallery-image" />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <span className="view-text">VIEW</span>
              </div>
            </div>
          </div>

          <div className="gallery-item">
            <img src="Images\Rectangle 31.png" alt="Architecture 10" className="gallery-image" />
            <div className="gallery-overlay">
              <div className="overlay-content">
                <span className="view-text">VIEW</span>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-navigation">
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
