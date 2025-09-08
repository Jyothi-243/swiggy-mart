import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/CustomHooks/useOnlineStatus';

//useState() is used to create the local state variables inside the functional components , 
const Header = () => {
    const [buttonText, setButtonText] = useState('login');

    const onlineStatus = useOnlineStatus();
    return (
        <div className="main-header">
            <div className='logo-container'>
                <img
                    className="logo"
                    src={LOGO_URL} />
            </div>
            <div className="navLinks">
                <ul className="list-links">
                    <li className="font-bold">Online status: {onlineStatus ? "online" : "offline"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contactpage">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className='login-button' onClick={() => {
                        buttonText === "login" ? setButtonText("logout") : setButtonText("login")
                    }}>{buttonText}</button>
                </ul>

            </div>

        </div>
    )
}

export default Header;