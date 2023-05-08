import React, { useState } from 'react';
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const handleMenuClick = () => {
        setSidebar(!sidebar);
    }

    return (
        <React.Fragment>

            <div className="navbar">
                <h1><Link to="/" className='text-decoration'>IELTS Exam</Link></h1>
                <Link className='menu-bars' >
                    {sidebar ? <CloseIcon onClick={handleMenuClick} className='menu-bars-icon' fontSize="large" />
                        : <MenuIcon onClick={handleMenuClick} className='menu-bars-icon' fontSize="large" />
                    }
                </Link>
            </div>
            <div className={sidebar ? 'navbar-background' : ''}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'></li>
                        <Sidebar handleMenuClick={handleMenuClick} />
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
