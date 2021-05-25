import React from 'react';
import {NavLink} from 'react-router-dom';

const NotFound = () => {
    return (
<div className="notFound">
    <div className="notFoundContent">
        <h3 className="home">Bienvenue sur mon CV </h3>
    <NavLink exact to="/">
    <i class="fas fa-angle-right"></i><span>Home</span>
    </NavLink>
    
    
    </div>
</div>

        );
};

export default NotFound;