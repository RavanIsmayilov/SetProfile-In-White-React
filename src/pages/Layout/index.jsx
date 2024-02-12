import { Link, Outlet } from 'react-router-dom';
import "./layout.css"

export default function Layout(){

    return(
       <div>
        <header className='header'>
                <ul className='lists'>
                    <li className='list'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='list'>
                        <Link to= "/about">About</Link>
                    </li>
                    <li className='list'>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className='list'>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
        </header>

        <div className='layout_main'>
        <Outlet/>
        </div>

   
    </div>

    )
}