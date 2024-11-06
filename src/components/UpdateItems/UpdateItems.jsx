import React from 'react';
import { Link } from 'react-router-dom';

const UpdateItems = () => {
    const handleUpdateItems = () =>{

    }
      

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h1 className="mb-5 text-black text-3xl font-extrabold">Update coffee items</h1>
        <form onSubmit={handleUpdateItems}>
           {/* form name and Quantity row  */}
        <div className="md:flex w-[100%] justify-center mb-3 gap-3">
        <div className="input input-bordered flex items-center gap-2 md:w-1/2">
        <input type="text" className="grow" name="name" placeholder="Coffee Name" />
        </div>
        <div className="input input-bordered flex items-center gap-2 md:w-1/2">
        <input type="text" className="grow" name="quantity" placeholder="Available Quantity" />
        </div >
        </div>
           {/* form supplier row  */}
        <div className="md:flex w-[100%] justify-center mb-3 gap-3">
        <div className="input input-bordered flex items-center gap-2 md:w-1/2">
        <input type="text" className="grow" name="chef" placeholder="Chef" />
        </div>
        <div className="input input-bordered flex items-center gap-2 md:w-1/2">
        <input type="text" className="grow" name="details" placeholder="Details" />
        </div >
        </div>
           {/* form teste row  */}
        <div className="md:flex w-[100%] justify-center mb-3 gap-3">
        <div className="input input-bordered flex items-center gap-2 md:w-1/2">
        <input type="text" className="grow" name="teste" placeholder="teste Name" />
        </div>
        <div className="input input-bordered flex items-center gap-2 md:w-1/2">
        <input type="text" className="grow" name="Category" placeholder="Category" />
        </div >
        </div>
        <div className="input input-bordered flex items-center gap-2 md:w-full">
        <input type="text" className="grow text-center" name="photo"  placeholder="Photo Url" />
        </div >

            <Link to="/addCraftItems" className="btn mt-5 w-full">Update Items</Link>
        </form>
       </div>
    );
};

export default UpdateItems;