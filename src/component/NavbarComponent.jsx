import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function NavbarComponent() {
    const { user, userlogout } = useContext(UserContext)
    const navigate = useNavigate()

    const HandleLogout = () => {
        userlogout()
        navigate('/')

    }
    return (
        <div>
            <header className="absolute inset-x-0 top-0 z-10 w-full bg-black" >
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <Link to="#" title="" className="flex">
                                <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/logo.svg" alt="" />
                            </Link>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <Link to="/" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Home </Link>

                            <Link to="/blog" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Blog  </Link>

                            <Link to="/events" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Events </Link>
                            <Link to="/exhibitor" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Exhibitors </Link>
                            <Link to="/eventschedules" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Schedules </Link>

                            <Link to="/contact" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Contact Us </Link>
                        </div>

                        {!user && <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
                            <Link to="/login" title="" className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"> Log in </Link>

                            <Link to="#" title="" className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg" role="button"> Apply for free </Link>
                        </div>}

                        {user && <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={HandleLogout}>
                            Logout
                        </button>}

                        <button type="button" className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800">
                            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>

                            {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}
