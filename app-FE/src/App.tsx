import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
	<>
		<NavBar/>
		{/* <p>LandingPage</p> */}
	</>
  )
}

export default App
