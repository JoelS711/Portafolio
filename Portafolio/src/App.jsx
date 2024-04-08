import { useState } from 'react'
import './styles/App.css'
import { Header } from './Header.jsx'
import { Presentation } from './Presentation.jsx'
import { Download} from './Download.jsx'
import { About } from './About.jsx'

function App() {
  return(
    <>
    <Header/>
    <Presentation/>
    <Download/>
    <About/>
    </>
  )

}

export default App
