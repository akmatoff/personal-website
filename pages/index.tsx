import type { NextPage } from 'next'
import About from '../components/pages/Home/About'
import Featured from '../components/pages/Home/Featured'
import HeroSection from '../components/pages/Home/HeroSection'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Featured />
      <About />
    </>
  )
}

export default Home
