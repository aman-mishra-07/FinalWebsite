import { useState } from 'react'
import Flowcards from './components/cards'
import Flowcrousal from './components/crousal'
import Flowfooter from './components/footer'
import Flownavbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='bg-slate-800'>

    <Flownavbar></Flownavbar>
    <Flowcards></Flowcards>
    <Flowcrousal></Flowcrousal>

    <Flowfooter></Flowfooter>
    </div>
    
  )
}

export default App
