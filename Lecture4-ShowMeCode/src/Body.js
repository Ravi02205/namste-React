import { useState } from "react";
import Restaurant from "./Restaurant";
import { restaurantList } from '../config';
let Body = () => {
    const [searchText,setSearchText]=useState('');
    const [restaurants, setRestaurants]=useState(restaurantList);
    let getFilteredData =(searchText,restaurant)=>{
        return restaurant.filter((element) => element.data.name.toLowerCase().includes(searchText.toLowerCase()));
    }
    return (
        <>
        <div className="search-container">
            <input className="search-input" type="text" placeholder="Search" value={ searchText } onChange={(e)=>{
                setSearchText(e.target.value);
            }}/>
            <button className="search-btn" onClick={()=>{
                let data=getFilteredData(searchText,restaurants);        
                setRestaurants(data)
            }}>Search</button>
        </div>
        <div className='restaurantList'>
                {restaurants.map((restaurant) => {
                return <Restaurant {...restaurant.data} key={restaurant.data.id} />
            })}
        </div>
        </>
    );
};

export default Body;    