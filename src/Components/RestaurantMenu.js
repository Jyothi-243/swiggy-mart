import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/CustomHooks/useRestroMenu";
import RestarauntCategory from "./RestarauntCategory";
import { useState } from 'react';


const RestaurantMenu = () => {

    const { resId } = useParams();
    const restroDetails = useRestroMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    const handleShowIndex = (index) => {
        if (showIndex === index) {
            setShowIndex(null)
        }
        else setShowIndex(index);

    }
    if (!restroDetails) {
        return <ShimmerUI />;
    }

    const { name, cuisines, costForTwoMessage, avgRating, areaName, totalRatings, sla } = restroDetails?.cards[2]?.card?.card?.info || "";

    const { itemCards, title } = restroDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;


    const categories = restroDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) =>

        category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    return (
        <div className="restro-menu">
            <h1>{name}</h1>
            <h2>Menu</h2>
            <div className="restro-card">
                <div className="restro-card-data">
                    <p> ⭐ {avgRating}({totalRatings / 100} Ratings) - {costForTwoMessage} </p>
                    <p>{cuisines.join(", ")}</p>
                    <p>Outlet : {areaName}</p>
                    <p>{sla.slaString} </p>
                </div>
                {/* categories have to be there */}
                {categories.map((category, index) =>
                    //controlled component (because the inputs are controlled by its parent)
                    <RestarauntCategory
                        key={category.card?.card?.title || index}
                        data={category.card?.card}
                        setShowIndex={() => showIndex !== index ? setShowIndex(index) : setShowIndex(null)}
                        showItems={index === showIndex ? true : false}
                    />)}
            </div>
        </div>
    )
}

export default RestaurantMenu;