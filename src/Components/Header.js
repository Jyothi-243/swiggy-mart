import { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/CustomHooks/useOnlineStatus';
import userContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [buttonText, setButtonText] = useState('login');

    const onlineStatus = useOnlineStatus();

    const data = useContext(userContext);
    //subscribing to the store using the selector (gives access to the store)
    const cart = useSelector((store) => store.cart.items); //here we are subscribing to the store , only to items.
    console.log(cart);


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
                    <li><Link to="/cart">Cart - ({cart.length}) items</Link></li>
                    <button className='login-button' onClick={() => {
                        buttonText === "login" ? setButtonText("logout") : setButtonText("login")
                    }}>{buttonText}</button>
                    <li>{data?.loggedInuser}</li>
                </ul>

            </div>

        </div>
    )
}

export default Header;