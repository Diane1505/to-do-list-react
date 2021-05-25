import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (

<div className="sidebar">
<div className="id">
<div className="idContent"> 
</div>
    
</div>

<div className="navigation">
<ul>
    <li>
    <NavLink exact to="/" activeClassName="navActive">
<i class="fas fa-angle-right"></i>    <span>Home</span>
    </NavLink>
    </li>
    <li>
    <NavLink exact to="/competences" activeClassName="navActive">
<i class="fas fa-angle-right"></i>    <span>Compétences</span>
    </NavLink>
    </li>
    <li>
    <NavLink exact to="/portfolio" activeClassName="navActive">
<i class="fas fa-angle-right"></i>    <span>Travaux</span>
    </NavLink>
    </li>
    <li>
    <NavLink exact to="/contact" activeClassName="navActive">
<i class ="fas fa-angle-right "></i>    <span>Contact</span>
    </NavLink>
    </li>
</ul>

</div>

<div className="socialNetwork">
<ul>
<li>
  <a href="https://github.com/Diane1505" target="blank" rel="noopener noreferrer">
  <i className="fab fa-github"></i>
      </a>  
</li>
<li>
  <a href="http://senseid.fr/" target="blank" rel="noopener noreferrer">
  <i class="fas fa-window-restore"></i>      </a>  
</li>
<li>
  <a href="" target="blank" rel="noopener noreferrer">
  <i class="fab fa-linkedin"></i>      </a>  
</li>

</ul>
<div className ="signature">
    <p></p>
</div>

</div>


</div>
        );
};

export default Navigation;