import './App.css'
import Benefits from './components/sections/Benefits'
import Footer from './components/sections/Footer'
import Header from './components/sections/Header'
import Main from './components/sections/Main'
import ServicesFibra from './components/sections/ServicesFibra'
import ServicesMovel from './components/sections/ServicesMovel'

import fundo from "./assets/fundo.jpg"

function App() {

  return (
    <>
      <div>
        <Header/>
        <Main id='main'/>
        <div className="w-full h-full bg-auto bg-center"
        style={{ backgroundImage: `url(${fundo})`}}>
          <div className='bg-branco bg-opacity-75'>
            <ServicesFibra id='servicesFibra'/>
            <Benefits id='beneficios'/>
            <ServicesMovel id='servicesMovel'/>
          </div>
        </div>
        <Footer id='footer'/>
      </div>
    </>
  )
}

export default App