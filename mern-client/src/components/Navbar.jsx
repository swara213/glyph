import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';


//readt icons 
import {FaBarsStaggered, FaBlog} from "react-icons/fa6"; 

const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false) ; 
    const [isSticky , setIsSticky] = useState(false) ; 

    
    const toggleMenu = () => { 
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => { 
        const handleScroll = () => {
            if(window.scrollY > 100) { 
                setIsSticky(true) ; 
            }
            else
            {
                setIsSticky(false) ;
            }
        }    
        window.addEventListener("scroll",handleScroll) ; 
        
            return() => {
                 window.addEventListener("scroll",handleScroll) ; 
            } 
        } ,[])
    

    //Navitems

    const navItems = [
        {link: "Home" ,path:'/'} , 
        {link: "About" ,path:'/about'} , 
        {link: "Shop" ,path:'/shop'} , 
        {link: "Sell Your Book" ,path:'/admin/dashboard'} , 
        
    ]
  return (
    <header className='w-full bg-[#F5E6CA] fixed top-0 right-0 left-0 transition-all ease-in duration-300'>
   
        <nav className={`py-4 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-[#F5E6CA]" : ""}`}>
            <div className='flex justify-between items-center text-base ' >
                <Link to ="/" className='text-2xl font-bold text-black flex-row items-centre gap-2'>GLYPH</Link>


                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => <Link key={path } to= {path}className='bloack text-base text-black uppercase cursor-pointer hover:text-yellow-500'>{link}</Link>)
                    } 
                </ul>

        
            </div>
        </nav>
    </header>
  )
} 

export default Navbar


