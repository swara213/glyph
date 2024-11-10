import { React , useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import 'flowbite/dist/flowbite.css';
import 'flowbite';
import { AuthProvider } from './context/AuthContext';


// import MyFooter from './components/MyFooter'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
     
      <AuthProvider>
        <Navbar />
        <div className='min-h-screen'>
          <Outlet />
        </div> 
      </AuthProvider>
      
    </>
  )
}

export default App
