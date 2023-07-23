import { IMG_CDN_URL } from "../config";

let Restaurant = ({ avgRating, cloudinaryImageId, name, cuisines, slaString, costForTwoString }) => {

    let ratingColor = (avgRating < 4) ? { backgroundColor: '#DB7C38' } : { backgroundColor: '#48C479' };

    return (
        <div className='font-sans w-3/12 min-w-[248px] p-2 m-2 transition-all hover:border hover:border-color-[#777777] hover:scale-105 hover:shadow-slate-200'>

            <div className='mb-2'>
                <img src={IMG_CDN_URL + cloudinaryImageId} alt="Being Hungry" className='mb-2 w-full' />
            </div>
            <div className='mb-2'>
                <h1 className='mb-1 text-slate-950 text-lg'>{name}</h1>
                <p className='mb-2 text-sm font-thin'>{cuisines.join(', ')}</p>
            </div>
            <div className='mb-2 text-slate-400 mt-5 text-sm font-thin flex justify-between'>
                <span className=' mb-2 bg-green-500 py-[2px] px-[5px] text-white text-sm' style={ratingColor} >&#9733; {avgRating}</span>
                &middot;
                <span className='mb-2'>{slaString}</span>
                &middot;
                <span className='mb-2'> {costForTwoString}</span>
            </div>
            <hr className="mb-2 h-[1px] bg-slate-200"/>
        </div>
    );
};

export default Restaurant;