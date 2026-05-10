import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Programs from './components/Programs'
import HowToHelp from './components/HowToHelp'
import AboutFounder from './components/AboutFounder'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Programs />
        <HowToHelp />
        <AboutFounder />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
