import React, { useState } from 'react';
import Logo from '../../assets/images/letsdiscuss_dark.png';
import { Link } from 'react-router-dom';
import CompanyReview from '../../pages/review/CompanyReview';

const NavBar = () => {

  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);
  const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuVisible(!isProfileMenuVisible);
  };

  const HamburgerMenuVisible = () => {
    setIsHamburgerMenuVisible(!isHamburgerMenuVisible);
  };

  // const logo = process.env.REACT_APP_LOGO;
  return (
    <div>

      <nav className="bg-white shadow-lg w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" onClick={HamburgerMenuVisible} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <button>
                  <Link to='/'><img className="h-12 w-40" src={Logo} alt="LetsDiscuss" /></Link>
                </button>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4" >
                  <a href="#" className="text-my-grey-dark hover:bg-golden hover:text-white rounded-md px-3 py-2 text-lg font-medium">Jobs</a>
                  <a href="#" className="text-my-grey-dark hover:bg-golden hover:text-white rounded-md px-3 py-2 text-lg font-medium">Reviews</a>
                  <a href="#" className="text-my-grey-dark hover:bg-golden hover:text-white rounded-md px-3 py-2 text-lg font-medium">Salaries</a>
                  <a href="#" className="text-my-grey-dark hover:bg-golden hover:text-white rounded-md px-3 py-2 text-lg font-medium">My Office Community</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button> */}
              <div className="relative ml-3 bg-golden p-1 rounded-full">
                <div>
                  {!isProfileMenuVisible && <button type="button" onClick={toggleProfileMenu} className="relative flex rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className='p-2 mt-0.5 block text-lg iphone:hidden'>
                      +  Contribute
                    </span>
                    <i className="fa-solid fa-circle-chevron-down p-2 fa-2x"></i>
                  </button>}
                  {isProfileMenuVisible && <button type="button" onClick={toggleProfileMenu} className="relative flex rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className='p-2 mt-0.5 block text-lg iphone:hidden'>
                      +  Contribute
                    </span>
                    <i className="fa-solid fa-circle-chevron-up p-2 fa-2x"></i>
                  </button>}
                </div>
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" onClick={toggleProfileMenu} style={{ display: isProfileMenuVisible ? 'block' : 'none' }} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                  <Link to='/'  className="hover:bg-golden block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Login</Link>
                  <Link to='/' className="hover:bg-golden block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Add salary review</Link>
                  <Link to='/company/review' component={CompanyReview}  className="hover:bg-golden block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Add company review</Link>
                  <Link to='/' className="hover:bg-golden block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Add office photos/Videos</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2" style={{ display: isHamburgerMenuVisible ? 'block' : 'none' }}>
            <Link to='/' className="text-my-grey-dark hover:bg-my_logo_bg hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reviews</Link>
            <Link to='/' className="text-my-grey-dark hover:bg-my_logo_bg hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Jobs</Link>
            <Link to='/' className="text-my-grey-dark hover:bg-my_logo_bg hover:text-white block rounded-md px-3 py-2 text-base font-medium">Salaries</Link>
            <Link to='/' className="text-my-grey-dark hover:bg-my_logo_bg hover:text-white block rounded-md px-3 py-2 text-base font-medium">My Office Community</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;



