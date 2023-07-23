import { useContext, useState } from 'react';
import Logo from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import userContext from '../utils/userContext';
import { useSelector } from 'react-redux';

let Title = () => (
    <a href="/">
        <img src={Logo} alt="logo" className='w-20 h-20' />
    </a>
);
let Header = () => {

    const [isLoggedin, setIsLoggedIn] = useState(false);
    const { userData, setUserData } = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.items);
    console.log(userData);
    return (
        <div className=' w-[97vw] bg-[#fffffffa] h-20 sticky top-0 z-1000'>
            <div className='w-[87%] justify-between items-center flex m-auto'>
                <Title />
                <div className=' w-4/12 '>
                    <ul className='flex justify-between list-none'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link> </li>
                        <li><Link to="/contact">Contact Us</Link> </li>
                        <li><Link to="/instamart">InstaMart</Link> </li>
                        <li><Link to="/cart">Cart {cartItems?.length} - Items</Link></li>
                    </ul>
                </div>
                <h1 className='font-bold text-teal-400'>{userData.name}</h1>
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