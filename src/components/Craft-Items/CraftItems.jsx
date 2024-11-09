import React from 'react';
import { Link } from 'react-router-dom';
import CraftCategorie from '../CraftCategorie/CraftCategorie';
import DetailsItems from '../DetailsItemsPage/DetailsItems';
import Swal from 'sweetalert2';
import { data } from 'autoprefixer';

const CraftItems = ({craft, crafts, setCrafts}) => {

    const {name, photo,quantity, woner, details, Category, price, _id} = craft;

    const handleDelete = _id =>{
      console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         
           fetch(`http://localhost:5000/craft/${_id}`, {
            method: 'DELETE'
           })
           .then(res => res.json())
           .then(data =>{
            console.log(data);
            if(data.deletedCount >0){
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
            }
            const remaining = crafts.filter =(cra =>cra._id !== _id)
            setCrafts(remaining);
           })
        }
      });
    }

    return (
       <div className='m-20'>
        
         <div className=''>
         
 

  <div className="card   w-96 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="">
    <h2 className="card-title">Name:{name} </h2>
    <p className='text-xl font-bold'>price: {price}</p> 
    <p className='text-xl font-bold'>quantity: {quantity}</p> 
    
    <Link to="/detailsItems" className='btn w-[100%] text-xl text-white'>View Details</Link>
    <div className=" text-end justify-end items-end mb-10 space-y-4 ">
    <button className="btn join-item text-xl text-white">View</button> <br />
    <button className="btn join-item text-xl text-white">Edit</button> <br />
    <button onClick={() =>handleDelete(_id)} className="btn join-item text-xl bg-orange-600 text-white">X</button>
    </div>
    <div className="card-actions justify-end ">
      <div className="badge badge-outline">ratings</div>
     </div>
  </div>
</div>
        </div>
       </div>
    );
};

export default CraftItems;