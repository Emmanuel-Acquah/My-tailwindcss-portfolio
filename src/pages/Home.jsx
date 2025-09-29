import React from 'react'
import Themetoggle from '../component/Themetoggle'
import StarBackground from '../component/StarBackground'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import AboutSection from '../component/AboutSection'
import SkillSection from '../component/SkillSection'
import ProjectSection from '../component/ProjectSection'
import ContactSection from '../component/ContactSection'
import { Footer } from '../component/footer'
const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <Themetoggle />
      <StarBackground />
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default Home