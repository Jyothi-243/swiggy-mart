import RestroCardContainer from "./RestroCardContainer";
// import { resObj } from "../utils/mockdata.js";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

//whenever the state variable updates react triggers a reconcilliation cycle(re-renders the component )

export const Body = () => {
    const [filterTopRatedRestro, setFilterTopRatedRestro] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterRestro, setFilterRestro] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"); //fetch method is given to us by browsers 
        //fetch method will return a promise , here aync and await will resolve the promise , and once data is there then we have to convert the data to json.
        const json = await data.json();
        const filterRestro = json?.data?.cards?.slice(3) || []
        setFilterTopRatedRestro(filterRestro);
        setFilterRestro(filterRestro);
        // console.log(filterRestro);
    }
    // console.log("filterRestrofilterRestro", filterRestro)

    return filterTopRatedRestro.length === 0 ? <ShimmerUI /> : (
        <div>
            <div className="filter">
                <input type="text" className="search-container" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button className="search-btn" onClick={() => {
                    //filter the restro by their name and update the UI 

                    setFilterRestro(filterTopRatedRestro.filter((restro) => restro?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase())))
                }}>Search</button>
                <button className="filtered-btn" onClick={() => {
                    const filteredList = filterTopRatedRestro.filter((res) => res.card.card.info.avgRating >= 4.5);
                    setFilterTopRatedRestro(filteredList);
                }}>
                    Top-Rated Restro
                </button>
            </div>
            <div className="res-container">
                {
                    filterRestro?.map((restro) => (
                        <RestroCardContainer key={restro?.card?.card?.info?.id} resData={restro?.card?.card?.info} id ={restro?.card?.card?.info?.id}/>
                    ))
                }

            </div>
        </div>
    )
}
export default Body;