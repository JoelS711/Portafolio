import { useState } from 'react'
import './styles/App.css'
import './Header.jsx'
import { Header } from './Header.jsx'
import { Presentation } from './Presentation.jsx'
import { Download} from './Download.jsx'

function App() {
  return(
    <>
    <Header/>
    <Presentation/>
    <Download/>
    </>
  )

}

export default App
