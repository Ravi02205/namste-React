import { IMG_CDN_URL } from "../config";

let Restaurant = ({ avgRating, cloudinaryImageId, name, cuisines, slaString, costForTwoString }) => {

    let ratingColor = (avgRating < 4) ? { backgroundColor: '#DB7C38' } : { backgroundColor: '#48C479' };

    return (
        <div className='restaurant'>

            <div className='res-img'>
                <img src={IMG_CDN_URL + cloudinaryImageId} alt="Being Hungry" className='restaurant-img' />
            </div>
            <div className='res-title'>
                <h1 className='res-name'>{name}</h1>
                <p className='res-tags'>{cuisines.join(', ')}</p>
            </div>
            <div className='res-details'>
                <span className='res-rating' style={ratingColor} >&#9733; {avgRating}</span>
                &middot;
                <span className='res-time'>{slaString}</span>
                &middot;
                <span className='res-cost'> {costForTwoString}</span>
            </div>
            <hr />
        </div>
    );
};

export default Restaurant;