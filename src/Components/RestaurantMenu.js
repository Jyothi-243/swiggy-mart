import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/CustomHooks/useRestroMenu";
import RestarauntCategory from "./RestarauntCategory";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const restroDetails = useRestroMenu(resId);

    if (!restroDetails) {
        return <ShimmerUI />;
    }

    const { name, cuisines, costForTwoMessage, avgRating, areaName, totalRatings, sla } = restroDetails?.cards[2]?.card?.card?.info || "";

    const { itemCards, title } = restroDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    console.log("dataaaaa", restroDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);


    const categories = restroDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) =>

        category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )


    console.log("catttt", categories);
    return (
        <div className="restro-menu">
            <h1>{name}</h1>
            <h2>Menu</h2>
            <div className="restro-card">
                <p>{avgRating}({totalRatings} Ratings) - {costForTwoMessage} </p>
                <p>{cuisines.join(", ")}</p>
                <p>Outlet : {areaName}</p>
                <p>{sla.slaString} </p>
                {/* categories have to be there */}
                {categories.map((category, index) => <RestarauntCategory key={category.card?.card?.title || index}
                    data={category.card?.card} />)}
            </div>
        </div>
    )
}

export default RestaurantMenu;