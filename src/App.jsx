import { useRef } from 'react'
import './App.css'
import Navbar from './CustomNavbar'

function App() {
  const refOne = useRef(null)
  const refTwo = useRef(null)

  return (
    <div className="main">
      <Navbar refOne={refOne} refTwo={refTwo} />
      <section id='section-1' ref={refOne}>
        This is section 1
      </section>
      <section id='section-2' ref={refTwo}>
        This is section 2
      </section>
    </div>
  )
}

export default App
