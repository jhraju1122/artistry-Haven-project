import React from 'react';
import { Link } from 'react-router-dom';

const CraftItems = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl py-8'>Trending Artists on Artsy</h1>

            <div className="card   w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="">
    <h2 className="card-title">item_name: </h2>
    <p>price</p>
    <Link to="/detailsItems" className='btn w-[100%]'>View Details</Link>
    <Link to="/" className='btn w-[100%]'>Delete</Link>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">ratings</div>
     </div>
  </div>
</div>
        </div>
    );
};

export default CraftItems;