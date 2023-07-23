import { useState, useEffect } from "react";
const useRestaurant =()=>{
    const [searchText, setSearchText] = useState('');
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    let getRestaurants = async function () {
        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.456333351378966&lng=78.37263149036954&page_type=DESKTOP_WEB_LISTING');
        let actualData = await data.json();
        setFilteredRestaurants(actualData?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurants(actualData?.data?.cards[2]?.data?.data?.cards);
    }

    return [allRestaurants, filteredRestaurants, searchText, setSearchText, setFilteredRestaurants]
}

export default useRestaurant;