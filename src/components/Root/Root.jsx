 
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import BannerCarrousel from '../BannerCarrousel/BannerCarrousel';

const Root = () => {
    return (
        <div className='max-w-full md:max-w-full mx-auto'>
       <Navbar></Navbar>
       <BannerCarrousel></BannerCarrousel>
         <Outlet></Outlet>
    </div>
    );
};

export default Root;