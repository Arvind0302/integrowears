import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaHome,
  FaProductHunt,
  FaCcVisa,
  FaRegUser,
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/products',
    text: 'Products',
    icon: <FaProductHunt />,
  },
  {
    id: 3,
    url: '/payment',
    text: ' Checkout',
    icon: <FaCcVisa />,
  },
  {
    id: 4,
    url: '/signin',
    text: 'Login',
    icon: <FaRegUser />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/Swag-Mode-100392718038597',
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    url: 'https://www.facebook.com/Swag-Mode-100392718038597',
    icon: <FaTwitter />,
  },

  {
    id: 3,
    url: 'https://www.facebook.com/Swag-Mode-100392718038597',
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: 'https://www.facebook.com/Swag-Mode-100392718038597',
    icon: <FaPinterestP />,
  },
];
