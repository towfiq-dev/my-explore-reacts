import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "Analytics",
    path: "/dashboard/analytics"
  },
  {
    id: 3,
    name: "Projects",
    path: "/projects"
  },
  {
    id: 4,
    name: "Settings",
    path: "/settings"
  },
  {
    id: 5,
    name: "Profile",
    path: "/user/profile"
  }
];
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const links = navigationData.map(route=> <Link key={route.id}route = {route}></Link>)
  return (
    <div>
    <nav className='flex justify-between mx-3 mt-3.5'>
      <span className='flex gap-2' onClick={()=>setOpen(!open)}>
        {open? 
        <X className='md:hidden'></X> : 
        <Menu className='md:hidden'></Menu>}
        <ul className= {`md:hidden absolute duration-1000 
         ${open? 'top-8' : '-top-40'} bg-yellow-800`}>
          {links}
        </ul>
        <h3>About</h3>
      </span>
      <ul className= 'md:flex hidden gap-4'>
      {links}
    </ul>
    <button className='cursor-pointer bg-green-500 px-2 rounded'>Sign In</button>
    </nav>
    </div>
  );
};

export default Navbar;