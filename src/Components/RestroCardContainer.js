import { CARD_IMG } from "../utils/constants";

const RestroCardContainer = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;
    return (
        <div className="res-card" style={{ backgroundColor: "lightgrey", margin: 20, padding: 12 }}>
            <img className="card-logo" src={CARD_IMG + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestroCardContainer;