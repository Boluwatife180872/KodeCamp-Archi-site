import Header from "./components/Header"
import HeroSection from "./components/Hero"
import AboutSection from "./components/About"
import MissionSection from "./components/Mission"
import ProjectsSection from "./components/Projects"
import ContactSection from "./components/Contact"
import Footer from "./components/Footer"


export default function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
