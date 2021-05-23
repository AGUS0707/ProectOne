/**
 * Created by Sherlock on 15.05.2021.
 */

import React from 'react';
import {Link, useLocation} from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    console.log(location.pathname);
    return (
        <div className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <Link to="/" className='navbar-brand'>
                    Logo
                </Link>

                <ul className="navbar-nav">
                    <li className="nav-item"><Link className={`nav-link ${location.pathname === '/hooks' ? 'active' : ''}`} to="/hooks">Hooks</Link></li>
                    <li className="nav-item"><Link className={`nav-link ${location.pathname === '/lifecycle' ? 'active' : ''}`} to="/lifecycle">Lifecycle methods</Link></li>
                    <li className="nav-item"><Link className={`nav-link ${location.pathname === '/trello' ? 'active' : ''}`} to="/trello">Trello</Link></li>
                    <li className="nav-item"><Link className={`nav-link ${location.pathname === '/posts' ? 'active' : ''}`} to="/posts">Yangiliklar</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;