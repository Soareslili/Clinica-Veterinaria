import AboutSection from "./components/About"
import ContactForm from "./components/ContactForm"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Statistics from "./components/Statistics"
import Team from "./components/Team"
import Testimonials from "./components/Testimonials"



function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutSection />
      <Statistics />
      <Team />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </>

  )
}

export default App
