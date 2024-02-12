import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"


function App() {

  return (

    <div className='main'>
      <Routes>    
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='*' element={<NotFound/>}/> 
        </Route>
      </Routes>
    </div>
  
  )
}

export default App
