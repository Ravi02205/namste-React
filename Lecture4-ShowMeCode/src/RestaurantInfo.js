import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
const RestaurantInfo = () => {
    let { resId } = useParams();
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    const getRestaurantInfo = async function () {
        let data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=17.456333351378966&lng=78.37263149036954&menuId=" + resId);
        let json = await data.json();
        console.log(json.data);
        setRestaurantInfo(json.data);
    }
    if (!restaurantInfo) return <Shimmer />;
    return (<>
        <div className="restaurant-info">
            <div>
                <h1>restaurant id:{resId}</h1>
                <img alt="" src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId} />
                <h2>{restaurantInfo?.name}</h2>
                <h3>{restaurantInfo?.area},{restaurantInfo?.city}</h3>
                <h3>{restaurantInfo?.avgRatingString} &#9733;</h3>
                <h3>{restaurantInfo?.costForTwoMsg}</h3>
            </div>
            <ul>
                {
                    Object.values(restaurantInfo?.menu?.items).map((item) => {
                        return (<li key={item.id}>{item.name}</li>)
                    })
                }
            </ul>
        </div>
    </>)
}

export default RestaurantInfo;