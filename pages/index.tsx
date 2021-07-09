import Head from 'next/head'
import tw from 'twin.macro'
import Image from 'next/image'


import Hero from '../components/pages/home/hero'
import Features from '../components/pages/home/features'
import RoadMap from '../components/pages/home/roadmap'
import Team from '../components/pages/home/team'
import Tokenomics from '../components/pages/home/tokenomics'
import Faq from '../components/pages/home/faq'
import Footer from '../components/footer'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div tw=" bg-black font-family[Montserrat] max-w-full">
      <Head>
        <title>Auto Stake</title>
        <meta name="description" content="Autostake" />
        <link
          rel="preload"
          href="/assets/fonts/montserrat.ttf"
          as="font"
          type="font/truetype"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/bungee.ttf"
          as="font"
          type="font/truetype"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/allerta.ttf"
          as="font"
          type="font/truetype"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Nav />
        <Hero />
        <Features />
        <Tokenomics />
        <RoadMap />
        <Faq />
        <Team />
        <Footer />
      </main>


    </div>
  )
}
