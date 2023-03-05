import { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
let Body = () => {
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

    let getFilteredData = (searchText, restaurant) => {
        return restaurant?.filter((element) => element?.data?.name?.toLowerCase().includes(searchText?.toLowerCase()));
    }

    if (!allRestaurants) { return <h1>Not Rendered Properly</h1> }

    return (allRestaurants?.length === 0) ? (<div className='restaurantList'><Shimmer /></div>) : (
        <>
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search" value={searchText} onChange={(e) => {
                    setSearchText(e?.target?.value);
                }} />
                <button className="search-btn" onClick={() => {
                    let data = getFilteredData(searchText, allRestaurants);
                    setFilteredRestaurants(data);
                }}>Search</button>
            </div>
            <div className='restaurantList'>
                {
                    (filteredRestaurants?.length == 0) ?
                        <h2> No restaurants Found</h2> :
                        filteredRestaurants?.map((restaurant) => {
                            return (
                                <Link to={"/restaurant/" + restaurant?.data?.id} key={restaurant?.data?.id} className="res-link">
                                    <Restaurant {...restaurant?.data} key={restaurant?.data?.id} />
                                </Link>
                            )
                        })
                }
            </div>
        </>
    );
};

export default Body;    