import { ITEM_IMG_CDN_URL } from "../config";

let CartItemCard = ({ imageId, name, category, price }) => {

    return (
        <div className='font-sans w-2/12 min-w-[248px] p-2 m-2 '>
            <div className='mb-2'>
                <img src={ITEM_IMG_CDN_URL + imageId} alt="Being Hungry" className='mb-2 w-full' />
            </div>
            <div className='mb-2'>
                <h1 className='mb-1 text-slate-950 text-lg'>{name}</h1>
                <p className='mb-2 text-sm font-thin'>{category}</p>
                <p className='mb-2 text-sm font-thin'>{"$" + (+price)/100}</p>
            </div>
            <hr className="mb-2 h-[1px] bg-slate-200"/>
        </div>
    );
};

export default CartItemCard;