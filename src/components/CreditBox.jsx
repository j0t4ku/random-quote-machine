import React, { useContext, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Context } from './Body';

const CreditBox = () => {
  
    return (
        <address className="my-2 fs-6 text-white">
    Created by
    <a
      href="https://github.com/j0t4ku"
      className="ms-2 text-reset underline underline-offset-2 td-1500"
      rel="author"
    > Joel Florentin
    </a> <FaHeart className='text-red-600 inline'/>
  </address>
    );
}

export default CreditBox;
