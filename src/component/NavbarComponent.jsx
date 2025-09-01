import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { MessageCircle } from 'lucide-react'

export default function NavbarComponent() {
    const { user, userlogout } = useContext(UserContext)
    const navigate = useNavigate()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const HandleLogout = () => {
        userlogout()
        navigate('/')
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div>
            <header 
                className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-[#625FFF] to-[#9813FA] shadow-lg' : 'bg-gradient-to-r from-[#625FFF] to-[#9813FA]'}`}
            >
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <Link to="/" title="" className="flex text-white text-xl font-bold">
                                EventSphere
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-4">
                            <Link to="/" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg"> Home </Link>
                            <Link to="/blog" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg"> Blog  </Link>
                            <Link to="/events" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg"> Events </Link>
                            <Link to="/exhibitor" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg"> Exhibitors </Link>
                            <Link to="/eventschedules" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg"> Schedules </Link>
                            <Link to="/contact" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg"> Contact Us </Link>
                            <Link to="/about" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg"> About Us </Link>
                        </div>

                        {/* Desktop Auth Buttons */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-4">
                            {!user ? (
                                <>
                                    <Link to="/login" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg"> Log in </Link>
                                    <Link to="/signup" title="" className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold transition-all duration-200 text-white bg-black hover:bg-gray-800 rounded-lg" role="button"> Sign Up </Link>
                                </>
                            ) : (
                                <>
                                    {/* Chat Icon */}
                                    <button
                                        onClick={() => navigate('/chat')}
                                        className="p-2 rounded-full bg-black text-white hover:bg-gray-800"
                                        title="Chat"
                                    >
                                        <MessageCircle size={20} />
                                    </button>
                                    <button 
                                        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800" 
                                        onClick={HandleLogout}
                                    >
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center lg:hidden">
                            {user && (
                                <button
                                    onClick={() => navigate('/chat')}
                                    className="p-2 mr-2 rounded-full bg-black text-white hover:bg-gray-800"
                                    title="Chat"
                                >
                                    <MessageCircle size={20} />
                                </button>
                            )}
                            
                            <button 
                                type="button" 
                                className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-white/10 hover:bg-white/10"
                                onClick={toggleMobileMenu}
                            >
                                {!isMobileMenuOpen ? (
                                    <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                ) : (
                                    <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden bg-gradient-to-b from-[#625FFF] to-[#9813FA] rounded-lg mt-2 py-4">
                            <div className="flex flex-col space-y-3 px-4">
                                <Link to="/" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg text-center" onClick={toggleMobileMenu}> Home </Link>
                                <Link to="/blog" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg text-center" onClick={toggleMobileMenu}> Blog </Link>
                                <Link to="/events" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg text-center" onClick={toggleMobileMenu}> Events </Link>
                                <Link to="/exhibitor" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg text-center" onClick={toggleMobileMenu}> Exhibitors </Link>
                                <Link to="/eventschedules" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg text-center" onClick={toggleMobileMenu}> Schedules </Link>
                                <Link to="/contact" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg text-center" onClick={toggleMobileMenu}> Contact Us </Link>
                                <Link to="/about" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg text-center" onClick={toggleMobileMenu}> About Us </Link>
                                
                                {!user ? (
                                    <>
                                        <Link to="/login" title="" className="text-base text-white transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-lg text-center mt-2" onClick={toggleMobileMenu}> Log in </Link>
                                        <Link to="/signup" title="" className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold transition-all duration-200 text-white bg-black hover:bg-gray-800 rounded-lg text-center mt-2" onClick={toggleMobileMenu} role="button"> Sign Up </Link>
                                    </>
                                ) : (
                                    <div className="flex flex-col space-y-3 mt-4">
                                        <button 
                                            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 text-center" 
                                            onClick={() => { HandleLogout(); toggleMobileMenu(); }}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </header>
            
            {/* Add padding to the top of your page content to account for fixed navbar */}
            <div className="h-16 lg:h-20"></div>
        </div>
    )
}