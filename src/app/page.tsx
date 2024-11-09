import React from 'react'
import Hero from './hero/page'
import About from './about/page'
import Projects from './projects/page'
import Contact from './contact/page'

function Home() {
  return (
    <main  className='flex min-h-screen flex-col bg-black '>
      <Hero />
      <About />
      <Projects />
      <Contact />
  
   
    </main>
    
  )
}

export default Home

