import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

//useState() is used to create the local state variables inside the functional components , 
const Header = () => {
    const [buttonText, setButtonText] = useState('login');
    return (
        <div className="mainHeader">
            <div className="logo">
                <img
                    className="image"
                    src={LOGO_URL} />
            </div>
            <div className="navLinks">
                <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contactpage">Contact Us</Link></li>
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