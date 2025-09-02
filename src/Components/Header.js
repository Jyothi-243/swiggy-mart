import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us </li>
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