import React from 'react'
import { Link, redirect } from 'react-router-dom'
import './navbar.css';

const Sidebar = (props) => {
    const IsUserLogIn = localStorage.getItem('user');

    return (
        <>
            {SidebarData && SidebarData.length > 0 ? <>{SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName} onClick={props.handleMenuClick}>
                        <Link to={item.path} >
                            <span className='sidebar-title'>{item.title === 'Profile' && IsUserLogIn === null ? '' : item.title === 'Logout' && IsUserLogIn === null ? '' : item.title === 'Login' && IsUserLogIn !== null ? '' : item.title}</span>
                        </Link>
                    </li>
                )
            })}</> : <h1>Something went worng</h1>}
        </>
    )
}

export default Sidebar;

const logout = () => {
    localStorage.removeItem('user');
    redirect("/login");
}

const SidebarData = [
    {
        title: 'Home',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: logout(),
        cName: 'nav-text'
    }
]