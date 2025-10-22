import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import TeamEthosSection from './components/sections/TeamEthosSection'
import TimelineSection from './components/sections/TimelineSection'
import VenturesSection from './components/sections/VenturesSection'
import TeamSection from './components/sections/TeamSection'
import AboutVenturesSection from './components/sections/AboutVenturesSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <Layout>
      <section id="home"><HeroSection /></section>
      <section id="ethos"><TeamEthosSection /></section>
      <section id="timeline"><TimelineSection /></section>
      <section id="ventures"><VenturesSection /></section>
      <section id="team"><TeamSection /></section>
      <section id="about"><AboutVenturesSection /></section>
      <section id="contact"><ContactSection /></section>
    </Layout>
  )
}

export default App

