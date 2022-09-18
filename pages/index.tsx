import type { NextPage } from 'next'
import Featured from '../components/pages/Home/Featured'
import HeroSection from '../components/pages/Home/HeroSection'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Featured />
    </>
  )
}

export default Home
