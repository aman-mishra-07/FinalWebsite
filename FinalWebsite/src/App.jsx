import { useState } from 'react'
import Flowcrousal from './components/crousal'
import Flowfooter from './components/footer'
import Flownavbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='bg-slate-800'>

    <Flownavbar></Flownavbar>
    <Flowcrousal></Flowcrousal>

    <Flowfooter></Flowfooter>
    </div>
    
  )
}

export default App
