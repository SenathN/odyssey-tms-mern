import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
    return (
        <header className='flex-item justify-content-between container-fluid border-bottom border-3'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo01">
                        <Link to='/' className='navbar-brand btn'>
                            
                        </Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link btn'>Tours</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link btn'>Hotels</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link btn '>Flights</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link btn '>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link btn '>Gallery</Link>
                            </li>
                        </ul>

                        {/* <Link to='/auth'
                            className='btn btn-sm text-center fs-6'>
                            Sign in
                            <i alt='Profile' className='bi bi-person-circle img-fluid fs-3 m-2 align-middle' />
                        </Link> */}
                        <div className="grid grid-cols-2 gap-1">
                            <div className="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                                <Link to={'/signup'}>
                                    <button className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
                                </Link>
                            </div>
                            <Link to={'/signin'}>
                                <div className="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                                    <button className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Header