import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-[30%]'>
        <h2>Oops!! SORRY  Raju mama!</h2>
       <div >
       <img className='m-auto'  src="https://i.ibb.co.com/pnGjyJx/error-pic.gif" alt="" />
       </div>
     <Link to="/">Go back to home</Link>
      </div>
    );
};

export default ErrorPage;
//