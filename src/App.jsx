import './App.css'
import Header from './components/Header/Header'
import Hem from './components/Hem'
import Om from './components/Om'
import Projekt from './components/Projekt'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <div className='bg-gradiant'>
        <Header/>
      </div>
      <Hem/>
      <Om/>
      <Projekt/>
      <Kontakt/>
      <Footer/>
    </div>
  )
}

export default App
