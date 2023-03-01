import Logo from '../Logo.png';

let Title = () => (
    <img src={Logo} alt="logo" className='logo' />
);
let Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='header'>
                <Title />
                <div className='nav-lists'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;