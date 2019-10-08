import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
let nav = props.user ?
<div>
    <Link to='logout'>Log Out</Link>
</div> 
:
<div id='nav-container'>
    <Link className='nav-element' to='/login'>Log In</Link>
    <Link className='nav-element' to='/signup'>Sign UP</Link>
</div>

return (
    <div>
        {nav}
    </div>
);

};

export default NavBar;


