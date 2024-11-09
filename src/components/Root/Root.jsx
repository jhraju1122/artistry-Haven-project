 
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import BannerCarrousel from '../BannerCarrousel/BannerCarrousel';
import CraftItems from '../Craft-Items/CraftItems';
import Footer from '../../Footer/Footer';
import CraftCategorie from '../CraftCategorie/CraftCategorie';
import FeaturedGalleries from '../Craft-Items/FeaturedGalleries';
import Footer2 from '../../Footer/Footer2';
import { useState } from 'react';
import FirebaseProvider from '../FirebaseProvider/FirebaseProvider';

const Root = () => {
    const loadedCrafts = useLoaderData();
    const [crafts, setCrafts] = useState(loadedCrafts);

    return (
        <div className='max-w-full md:max-w-full mx-auto'>
       <Navbar></Navbar>
       <BannerCarrousel></BannerCarrousel>
       <h1 className='text-6xl text-center text-white mt-32 mb-10'>Trending Artists on Artsy:{crafts.length}</h1>
      <div className='grid grid-cols-2  container mx-auto'>
       
      {
        crafts.map(craft => <CraftItems
        key={craft._id}
        craft={craft}
        crafts={crafts}
        setCrafts={setCrafts}
        ></CraftItems>)
       }
      </div>
       <CraftCategorie></CraftCategorie>
     <FeaturedGalleries></FeaturedGalleries>
{/*     
      <FirebaseProvider text={"hellow"} text2={'hellowworld'}>
        <button>Click me</button>
      </FirebaseProvider> */}

         <Outlet></Outlet>
         <Footer></Footer>
         <Footer2></Footer2>
    </div>
    );
};

export default Root;