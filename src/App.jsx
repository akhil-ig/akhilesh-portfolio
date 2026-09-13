import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Domains from './components/Domains'
import Integrations from './components/Integrations'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let lenis
    let raf
    if (!reduced) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
      window.__lenis = lenis
      lenis.on('scroll', ScrollTrigger.update)
      raf = (time) => lenis.raf(time * 1000)
      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(0)
    }

    const tweens = []
    if (!reduced) {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        tweens.push(
          gsap.fromTo(
            el,
            { opacity: 0, y: 36 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              delay: parseFloat(el.dataset.delay || 0),
              scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            }
          )
        )
      })
    } else {
      gsap.set('[data-reveal]', { opacity: 1 })
    }

    return () => {
      tweens.forEach((t) => t.kill())
      ScrollTrigger.getAll().forEach((t) => t.kill())
      if (raf) gsap.ticker.remove(raf)
      if (lenis) lenis.destroy()
      window.__lenis = undefined
    }
  }, [])

  return (
    <div className="noise starfield">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Domains />
        <Integrations />
        <div className="py-20">
          <CtaBanner />
        </div>
        <Contact />
      </main>
    </div>
  )
}
