import React from 'react';
import { images } from '../../assets/images/images';

const Navbar = () => {
    return (
        <div className='d-flex align-items-start justify-content-start py-3'>
            <img src={images.logo} alt="logo" className="logo" />
        </div>
    );
}

export default Navbar;
