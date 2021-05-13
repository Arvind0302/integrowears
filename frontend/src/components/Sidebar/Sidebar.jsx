import React, { useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import './Sidebar.css';
import { social, links } from './data';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <div className='brand-name'>
          <h5>
            Integro<span>.</span>
          </h5>
        </div>
        <button className='close-btn'>
          <IoIosArrowRoundBack onClick={closeSidebar} />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                {icon}
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <Link
                to={{
                  pathname: url,
                }}
                target='_blank'
              >
                {icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
