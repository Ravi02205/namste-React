
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { getFilteredData } from "../utils/utils";
import useRestaurant from "../utils/useRestaurant";
import useIsOnline  from "../utils/useOnline";
let Body = () => {

    let [allRestaurants, filteredRestaurants, searchText, setSearchText, setFilteredRestaurants] = useRestaurant();
    if (!allRestaurants) { return <h1>Not Rendered Properly</h1> }

    const onLine = useIsOnline();

    // if(!onLine){
    //     return(
    //         <h1> Offline ! Please Check you internet COnnection</h1>
    //     )
    // }

    return (allRestaurants?.length === 0) ? (<div className='p-2 flex flex-wrap justify-center'><Shimmer /></div>) : (
        <>
            <div className="flex justify-center m-2">
                <input className="search-input border-b placeholder-slate-500 border-b-slate-200 pl-2 rounded-lg" type="text" placeholder="Search" value={searchText} onChange={(e) => {
                    setSearchText(e?.target?.value);
                }} />
                <button className="ml-4 px-4 bg-green-400 rounded-lg" onClick={() => {
                    let data = getFilteredData(searchText, allRestaurants);
                    setFilteredRestaurants(data);
                }}>Search</button>
            </div>
            <div className='p-2 flex flex-wrap justify-center'>
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

// useLocalStorage 
// useAuth

