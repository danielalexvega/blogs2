import React, { useState } from 'react';  //took out useEffect
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'Contact Us',
    path: '/contact-us'
  },
  {
    title: 'Login',
    path: '/login'
  }
];

export default function Navigation({ user }) {
  const [menuActive, setMenuActive] = useState(false);
  // const [onMenu, setOnMenu] = useState(false);


  // useEffect(() => {

  //   const checkMenu = () => {
  //     if (menuActive && !onMenu) {
  //       console.log('close it down');
  //       setMenuActive(!menuActive);
  //     }
  //   }
  //   document.addEventListener('click', checkMenu)
  // });



  return (
    <nav className='site-navigation'
    // onMouseEnter={() => setOnMenu(true)}
    // onMouseLeave={() => setOnMenu(false)}
    >
      <span className='menu-title'>Daniel Vega | Blog </span>
      <div className={`menu-content-container ${menuActive && 'active'}`}>
        <ul>
          {
            navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <span className='menu-avatar-container'>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={38} />
          <span className='menu-avatar-name'>
            {`${user.firstName} ${user.lastName}`}
          </span>
        </span>
      </div>
      <i className='ionicons icon ion-ios-menu' onClick={() => setMenuActive(!menuActive)} />
    </nav>
  )
}