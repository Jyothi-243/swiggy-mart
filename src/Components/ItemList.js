import { CARD_IMG } from "../utils/constants";
import { useContext } from "react";
import userContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";


const ItemList = ({ itemCards }) => {
    const data = useContext(userContext);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch an Action
        dispatch(addItem(item));
    }

    return (
        <div>
            {itemCards.map((item, index) => {
                return (
                    <div className="itemList" key={item.card?.info?.id || index}>
                        <div className="item-list-left-container">
                            <div className="item-card-name">
                                <span >{item.card?.info?.name} - </span>
                                <span>₹{item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100}</span>
                                {/* <span>{data.loggedInuser}</span> */}
                            </div>

                            <p>{item.card?.info?.description}</p>
                            <hr />

                        </div>
                        <div className="itemcard-image">
                            <img src={CARD_IMG + item.card?.info?.imageId} />
                            <button onClick={() => { handleAddItem(item) }}>ADD +</button>
                        </div>
                    </div>

                )

            })}
        </div>
    )
}

export default ItemList;