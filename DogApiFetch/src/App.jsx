import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Dog from './component/dog'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dog></Dog>
    </>
  )
}

export default App
