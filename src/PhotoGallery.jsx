import Header from "./components/Header"
import GalleryPage from "./components/GalleryPage"
import Footer from "./components/Footer"
import "./index.css"

export default function Gallery() {
  return (
    <div>
      <Header />
      <main>
        <GalleryPage />
      </main>
      <Footer />
    </div>
  )
}
