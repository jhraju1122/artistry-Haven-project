import React from 'react';
import { Link } from 'react-router-dom';

const CraftCategorie = () => {
    return (
        <div className="hero h-[500px] container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <img className='w-[900px] h-[500px]  py-16 '
            src="https://i.ibb.co.com/nnMn92j/art-6.webp" />
          <div className='my-auto'>
            <h1 className="text-5xl font-bold py-5">Meet your new art advisor.</h1>
             
            <Link className="btn btn-primary"> Discover Artsy</Link>
          </div>
        </div>
      </div>
    );
};

export default CraftCategorie;