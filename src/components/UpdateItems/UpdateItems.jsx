import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateItems = () => {
   const craft = useLoaderData();
   const {name, photo,quantity, woner, details, Category, price, _id} = craft;

    const handleUpdateItems = () =>{
      event.preventDefault();
      const form = event.target;
      const  name = form.name.value;
      const quantity = form.quantity.value;
      const woner = form.woner.value;
      const details = form.details.value;
      const price = form.price.value;
      const Category = form.Category.value;
      const photo = form.photo.value;
      const addUpdateItems = {name, quantity, woner, details, price, Category,   photo};
      console.log(addUpdateItems);

      // send data to the server
   fetch(`http://localhost:5000/craft/${_id}`, {
      method: 'PUT',
      headers: {
         'content-type': 'application/json'
      },
      body:JSON.stringify(addUpdateItems)
   })
   .then(res=>res.json())
   .then(data =>{
      console.log(data);
      if(data.modifiedCount>0){
         Swal.fire({
            title: 'Success!',
            text: 'craft updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      }
   })
    }
      
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h1 className="mb-5 text-black text-3xl font-extrabold">Update craft item: {name}</h1>
        <form onSubmit={handleUpdateItems}>
           {/* form name and Quantity row  */}
        <div className="md:flex w-[100%] justify-center mb-3 gap-3">
        <div className="input input-bordered flex items-center gap-2 md:w-1/2">
        <input type="text" className="grow" defaultValue={name} name="name" placeholder="Coffee Name" />
        </div>
        <div className="input input-bordered flex items-center gap-2 md:w-1/2">
        <input type="text" className="grow" defaultValue={quantity} name="quantity" placeholder="Available Quantity" />
        </div >
        </div>
           {/* form supplier row  */}
        <div className="md:flex w-[100%] justify-center mb-3 gap-3">
        <div className="input input-bordered flex items-center gap-2 md:w-1/2">
        <input type="text" className="grow" name="woner" defaultValue={woner} placeholder="Chef" />
        </div>
        <div className="input input-bordered flex items-center gap-2 md:w-1/2">
        <input type="text" className="grow" name="details" defaultValue={details} placeholder="Details" />
        </div >
        </div>
           {/* form teste row  */}
        <div className="md:flex w-[100%] justify-center mb-3 gap-3">
        <div className="input input-bordered flex items-center gap-2 md:w-1/2">
        <input type="text" className="grow" name="Category" defaultValue={Category} placeholder="Category" />
        </div>
        <div className="input input-bordered flex items-center gap-2 md:w-1/2">
        <input type="text" className="grow" name="Category" defaultValue={details} placeholder="details" />
        </div >
        </div>
        <div className="input input-bordered flex items-center gap-2 md:w-full">
        <input type="text" className="grow text-center" name="photo" defaultValue={details} placeholder="Photo Url" />
        </div >

            <Link to="/updateItems" className="btn mt-5 w-full">Update Items</Link>
        </form>
       </div>
    );
};

export default UpdateItems;