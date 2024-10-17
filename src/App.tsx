import './App.css'
import Benefits from './components/sections/Benefits'
import Footer from './components/sections/Footer'
import Header from './components/sections/Header'
import Main from './components/sections/Main'
import ServicesFibra from './components/sections/ServicesFibra'
import ServicesMovel from './components/sections/ServicesMovel'

function App() {

  return (
    <>
      <div className='scroll-smooth'>
        <Header/>
        <Main id='main'/>
        <ServicesMovel id='servicesMovel'/>
        <Benefits id='beneficios'/>
        <ServicesFibra id='servicesFibra'/>
        <Footer id='footer'/>
      </div>
    </>
  )
}

export default App