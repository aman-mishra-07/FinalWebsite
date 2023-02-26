import { useState } from 'react'
import Flowcrousal from './components/crousal'
import Flowfooter from './components/footer'
import Flownavbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flownavbar></Flownavbar>
    <Flowcrousal></Flowcrousal>

    <Flowfooter></Flowfooter>
    </>
  )
}

export default App
