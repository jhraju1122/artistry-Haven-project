import React from 'react';
import { Link } from 'react-router-dom';


 

const DetailsItems = () => {
    return (
       <div className='container mx-auto'>

        <div className='justify-self-end p-10 '>
        
 <Link to ='/' className="hover:bg-blue-400 hover:text-white mr-4">Home</Link> 

<Link to ='/buy' className="hover:bg-blue-400 hover:text-white mr-4">Buy</Link> 

<Link to ='/sell' className="hover:bg-blue-400 hover:text-white mr-4">Sell</Link> 

<Link to ='/editorial' className="hover:bg-blue-400 hover:text-white mr-4">Editorial</Link> 

<Link to ='/paintings' className="hover:bg-blue-400 hover:text-white mr-4">Paintings</Link> 

<Link to ='/login' className="hover:bg-blue-400 hover:text-white bg-white p-2 rounded-lg text-black mr-4">Log In</Link> 

<Link to ='/signup' className="hover:bg-blue-400 hover:text-white bg-black rounded-lg">Sign Up</Link> 

        </div>
         <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> item_name: </h2>
          <p> subcategory_Name: </p>
          <p>short description: </p>
          <p> price: </p>
          <p> rating: </p>
          <p> customization-: </p>
          <p> processing_time-:</p>
          <p> stockStatus:</p>
          <p>  User Email:</p>
          <p>  User Name:</p>
          <p>  User Name:</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
       </div>
    );
};

export default DetailsItems;