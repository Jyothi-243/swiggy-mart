import { CARD_IMG } from "../utils/constants";

const ItemList = ({ itemCards }) => {
    console.log("sdfvasdf", itemCards);
    return (
        <div>
            {itemCards.map((item) => {
                return (
                    <div className="itemList" key={item.card?.info?.id}>
                        <div>
                            <div className="item-card-name">
                                <span >{item.card?.info?.name} - </span>
                                <span>₹{item.card?.info?.price / 100}</span>
                            </div>

                            <p>{item.card?.info?.description}</p>
                            <hr/>

                        </div>
                        <div className="itemcard-image">
                            <img src={CARD_IMG + item.card?.info?.imageId} />
                            <button>ADD +</button>
                        </div>
                    </div>

                )

            })}
        </div>
    )
}

export default ItemList;