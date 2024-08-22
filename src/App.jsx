import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'

function App() {
    <>
    <Navbar />
    <Outlet />
    </>
}

export default App
