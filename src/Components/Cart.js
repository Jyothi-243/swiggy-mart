import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";


const Cart = () => {
    const CartItems = useSelector((store) => store.cart.items)
    console.log(CartItems);
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart());

    }


    return (
        <div className="cart-container">
            Cart
            <div className="cart-item-container">
                <button onClick={handleClear}>Clear Cart</button>
                {CartItems ? <ItemList itemCards={CartItems || ''} /> : <h1>Cart is empty. Add items to the cart!</h1>}
            </div>
        </div>
    )
}

export default Cart;