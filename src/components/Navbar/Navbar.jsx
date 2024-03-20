import React,{useState} from 'react'
import './Navbar.css'
import { FiAlignRight } from "react-icons/fi";
import MobileNav from '../MobileNav/MobileNav';
import { IoClose } from "react-icons/io5";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);

  };


  return (
    <div>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
        <nav className="nav-wrapper">
            <div className="nav-content">
                <h2 className='logo' >LOGO.</h2>
                    <ul>
                        <li>
                            <a className="menu-item">Home</a>
                        </li>
                        <li>
                            <a className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item">Projects</a>
                        </li>
                        <li>
                            <a className="menu-item">Contact </a>
                        </li>
                
                            <button className= "contact-btn" onClick={() => {}}>
                                Hire Me
                            </button>
                </ul>

            <button className="menu-btn" onClick={toggleMenu}>
                <span >
                        {openMenu ? <IoClose /> : <FiAlignRight />}
                </span>
            </button>

                                                
            </div>
        </nav>    

    </div>
  )
}

export default Navbar
