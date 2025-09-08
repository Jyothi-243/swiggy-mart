import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/CustomHooks/useRestroMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const restroDetails = useRestroMenu(resId);

    if (!restroDetails) {
        return <ShimmerUI />;
    }

    const { name, cuisines, costForTwoMessage, avgRating, areaName, totalRatings, sla } = restroDetails?.cards[2]?.card?.card?.info || "";

    const { itemCards, title } = restroDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    console.log(itemCards);

    return (
        <div className="restro-menu">
            <h1>{name}</h1>
            <h2>Menu</h2>
            <div className="restro-card">
                <p>{avgRating}({totalRatings} Ratings) - {costForTwoMessage} </p>
                <p>{cuisines.join(", ")}</p>
                <p>Outlet : {areaName}</p>
                <p>{sla.slaString} </p>
                <ul>
                    {itemCards.map((itemCard, index) => <li key={index}>{itemCard?.card?.info?.name} - Rs.{itemCard?.card?.info?.price / 100}</li>
                    )}
                </ul>
            </div>
            {title}
        </div>
    )
}

export default RestaurantMenu;