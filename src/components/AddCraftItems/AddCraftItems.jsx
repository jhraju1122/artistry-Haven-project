import React from 'react';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
 
  const AddCraftItems = () => {

  const handleCraftAddItems = (event) =>{
   event.preventDefault();
   const form = event.target;
   const  name = form.name.value;
   const quantity = form.quantity.value;
   const woner = form.woner.value;
   const details = form.details.value;
   const price = form.price.value;
   const Category = form.Category.value;
   const photo = form.photo.value;
   const addItems = {name, quantity, woner, details, price, Category, photo};
   console.log(addItems);
    
   // send data to the server
   fetch('http://localhost:5000/craft', {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body:JSON.stringify(addItems)
   })
   .then(res=>res.json())
   .then(data =>{
      console.log(data);
      if(data.insertedId){
         Swal.fire({
            title: 'Success!',
            text: 'user added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      }
   })

  }

  

    return (
      <div className="bg-[#F4F3F0] p-24">
      <h1 className="mb-5 text-black text-3xl font-extrabold">add a craft</h1>
      <form onSubmit={handleCraftAddItems}>
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
      <input type="text" className="grow" name="woner" placeholder="Woner" />
      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="details" placeholder="Details" />
      </div >
      </div>
         {/* form teste row  */}
      <div className="md:flex w-[100%] justify-center mb-3 gap-3">
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="price" placeholder="price" />
      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="Category" placeholder="Category" />
      </div >
      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-full">
      <input type="text" className="grow text-center" name="photo"  placeholder="Photo Url" />
      </div >

          <button type='submit' className="btn mt-5 w-full">Add Craft</button>
      </form>
     </div>
    );
};

export default AddCraftItems;