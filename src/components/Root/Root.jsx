 
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import BannerCarrousel from '../BannerCarrousel/BannerCarrousel';
import CraftItems from '../Craft-Items/CraftItems';
import Footer from '../../Footer/Footer';
import CraftCategorie from '../CraftCategorie/CraftCategorie';
import FeaturedGalleries from '../Craft-Items/FeaturedGalleries';

const Root = () => {
    return (
        <div className='max-w-full md:max-w-full mx-auto'>
       <Navbar></Navbar>
       <BannerCarrousel></BannerCarrousel>
       <CraftItems></CraftItems>
       <CraftCategorie></CraftCategorie>
       <FeaturedGalleries></FeaturedGalleries>
         <Outlet></Outlet>
         <Footer></Footer>
    </div>
    );
};

export default Root;