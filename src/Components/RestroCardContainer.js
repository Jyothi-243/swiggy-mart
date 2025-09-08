import { CARD_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const RestroCardContainer = (props) => {
    console.log("propssss", props);
    const { resData, id } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;
    console.log("iddddd", id);
    return (
        <div className="res-card" style={{ backgroundColor: "lightgrey", margin: 20, padding: 12 }}>
            <img className="card-logo" src={CARD_IMG + cloudinaryImageId} />
            <Link to={"/restaurant/" + id}><h3>{name}</h3></Link>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}


//higher order function , which takes one component and gives the enhanced component 
export const PromotedRestroCard = (RestroCardContainer) => {

    return (props) => {
        return (
            <div className="promoted-restro">
                <label>Promoted</label>
                <RestroCardContainer {...props}/>
            </div>
        )
    }
};

export default RestroCardContainer;