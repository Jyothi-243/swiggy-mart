import RestroCardContainer, {PromotedRestroCard} from "./RestroCardContainer";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";

export const Body = () => {
    const [filterTopRatedRestro, setFilterTopRatedRestro] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterRestro, setFilterRestro] = useState([]);

    const WrappedRestroCard = PromotedRestroCard(RestroCardContainer);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"); 
        const json = await data.json();
        const filterRestro = json?.data?.cards?.slice(3) || []
        setFilterTopRatedRestro(filterRestro);
        setFilterRestro(filterRestro);
    }

    const onlineStatus = useOnlineStatus();
    console.log("online status ", onlineStatus);
    if (onlineStatus === false) return <h1>You are in offline please check your connection</h1>


    return filterTopRatedRestro.length === 0 ? <ShimmerUI /> : (
        <div>
            <div className="filter">
                <input type="text" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button onClick={() => {
                    //filter the restro by their name and update the UI 

                    setFilterRestro(filterTopRatedRestro.filter((restro) => restro?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase())))
                }}>Search</button>
                <button onClick={() => {
                    const filteredList = filterTopRatedRestro.filter((res) => res.card.card.info.avgRating >= 4.5);
                    setFilterTopRatedRestro(filteredList);
                }}>
                    Top-Rated Restro
                </button>
            </div>
            <div className="res-container" style={{ margin: "0 auto" }}>
                {
                    filterRestro?.map((restro) => (
                        restro?.card?.card?.info?.promoted ? <WrappedRestroCard key={restro?.card?.card?.info?.id} resData={restro?.card?.card?.info} id={restro?.card?.card?.info?.id} /> : <RestroCardContainer key={restro?.card?.card?.info?.id} resData={restro?.card?.card?.info} id={restro?.card?.card?.info?.id} />
                    ))
                }

            </div>
        </div>
    )
}
export default Body;