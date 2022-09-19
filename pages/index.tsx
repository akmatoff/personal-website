import type { NextPage } from 'next'
import { AppContext } from 'next/app'
import About from '../components/pages/Home/About'
import Featured from '../components/pages/Home/Featured'
import HeroSection from '../components/pages/Home/HeroSection'
import Work from '../components/pages/Home/Work'

import projects from '../data/projects.json'

export async function getStaticProps(context: AppContext) {
  return {
    props: {
      projects
    },
    revalidate: 60 * 15
  }
}

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Featured />
      <Work projects={projects} />
      <About />
    </>
  )
}

export default Home
