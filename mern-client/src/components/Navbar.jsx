// import React, { useContext, useEffect , useState} from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa'


// //readt icons 
// import {FaBarsStaggered, FaBlog} from "react-icons/fa6"; 
// import { AuthContext } from '../contects/AuthProvider';

// const Navbar = () => {
//     const [isMenuOpen , setIsMenuOpen] = useState(false) ; 
//     const [isSticky , setIsSticky] = useState(false) ; 

//     const{user} = useContext(AuthContext) ; 
//     console.log(user)

    
//     const toggleMenu = () => { 
//         setIsMenuOpen(!isMenuOpen)
//     }

//     useEffect(() => { 
//         const handleScroll = () => {
//             if(window.scrollY > 100) { 
//                 setIsSticky(true) ; 
//             }
//             else
//             {
//                 setIsSticky(false) ;
//             }
//         }    
//         window.addEventListener("scroll",handleScroll) ; 
        
//             return() => {
//                  window.addEventListener("scroll",handleScroll) ; 
//             } 
//         } ,[])
    

//     //Navitems

//     const navItems = [
//         {link: "Home" ,path:'/'} , 
//         {link: "About" ,path:'/about'} , 
//         {link: "Shop" ,path:'/shop'} , 
//         {link: "Sell Your Book" ,path:'/admin/dashboard'} ,
//         {link: "Cart", path: '/cart', icon: <FaShoppingCart /> } 
       
        
//     ]
//   return (
//     <header className='w-full bg-[#F5E6CA] fixed top-0 right-0 left-0 transition-all ease-in duration-300'>
   
//         <nav className={`py-4 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-[#F5E6CA]" : ""}`}>
//             <div className='flex justify-between items-center text-base ' >
//                 <Link to ="/" className='text-2xl font-bold text-black flex-row items-centre gap-2'>GLYPH</Link>


//                 <ul className='md:flex space-x-12 hidden'>
//                     {
//                         navItems.map(({link, path}) => <Link key={path } to= {path}className='bloack text-base text-black uppercase cursor-pointer hover:text-yellow-500'>{link}</Link>)
//                     } 
//                 </ul>

        
//             </div>
//         </nav>
//     </header>
//   )
// } 

// export default Navbar


import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBarsStaggered } from "react-icons/fa6"; 
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { user } = useContext(AuthContext);
    console.log(user);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); // Fixed this line to remove the event listener correctly
        };
    }, []);

    // Nav items
    const navItems = [
        { link: "Home", path: '/' },
        { link: "About", path: '/about' },
        { link: "Shop", path: '/shop' },
        { link: "Sell Your Book", path: '/admin/dashboard' },
        { link: "Cart", path: '/cart', icon: <FaShoppingCart className="inline-block mr-1" /> } // Inline icon with margin
    ];

    return (
        <header className={`w-full bg-[#F5E6CA] fixed top-0 right-0 left-0 transition-all ease-in duration-300 ${isSticky ? "shadow-lg" : ""}`}>
            <nav className={`py-4 px-4 ${isSticky ? "bg-[#F5E6CA]" : ""}`}>
                <div className='flex justify-between items-center text-base'>
                    <Link to="/" className='text-2xl font-bold text-black flex-row items-center gap-2'>GLYPH</Link>

                    <div className="md:flex space-x-12 hidden">
                        <ul className='flex space-x-12'>
                            {
                                navItems.map(({ link, path, icon }) => (
                                    <li key={path} className='flex items-center'>
                                        <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-yellow-500'>
                                            {icon} {/* Render icon inline with the text */}
                                            {link}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button onClick={toggleMenu} className="md:hidden">
                        <FaBarsStaggered /> {/* Use an icon for the mobile menu toggle */}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <ul className='flex flex-col space-y-2 mt-2'>
                            {
                                navItems.map(({ link, path, icon }) => (
                                    <li key={path} className='flex items-center'>
                                        <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-yellow-500'>
                                            {icon}
                                            {link}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;