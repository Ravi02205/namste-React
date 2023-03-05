import { useState } from 'react';
import Logo from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';

let Title = () => (
    <a href="/">
        <img src={Logo} alt="logo" className='logo' />
    </a>
);
let Header = () => {

    const [isLoggedin, setIsLoggedIn] = useState(false);

    return (
        <div className='header-wrapper'>
            <div className='header'>
                <Title />
                <div className='nav-lists'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link> </li>
                        <li><Link to="/contact">Contact Us</Link> </li>
                        <li>Cart</li>
                    </ul>
                </div>
                {
                    isLoggedin ?
                        (<Link to="/"><button onClick={() => { setIsLoggedIn(false) }}>Logout</button></Link>)
                        :
                        (<Link to="/login"><button onClick={() => { setIsLoggedIn(true) }}>LogIn</button></Link>)
                }
            </div>
        </div>
    );
};

export default Header;