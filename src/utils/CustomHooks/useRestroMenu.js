import { useEffect, useState } from "react";
import { API_URL} from "../../utils/constants";


const useRestroMenu = (resid) => {
    const [restroDetails, setRestroDetails] = useState(null);

    useEffect(() => {
        fetchMenu();

    }, [])


    const fetchMenu = async () => {
        const data = await fetch(API_URL + resid);
        const json = await data.json();
        setRestroDetails(json.data);

    }

    return restroDetails;
}

export default useRestroMenu;