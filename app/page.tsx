import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
      </main>
      <Footer />
    </>
  )
}
