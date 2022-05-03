import React from 'react'
import Sidebar from './Sidebar'
import {faHome,faList,faCog} from '@fortawesome/free-solid-svg-icons'
import { Link , useLocation} from 'react-router-dom'
export default function NavBar() {
  const location=useLocation(false);
    const links=[
      {
        name:'Home',
        path:'/',
        icon:faHome
      },
      {
        name:'Recipes',
        path:'/recipes',
        icon: faList
      },
      {
        name:'Settings',
        path: '/settings',
        icon: faCog
      }
    ]
    const [showSidebar,setShowsideBar]=React.useState(false);
    function closeSidebar(){
       setShowsideBar(false);
    }

  return (
    <>
      <div className='navbar'>
        <Link to='/' className='logo'>F<span>oo</span>diesHub</Link>
        <div className='nav-links'>
            {links.map(link=>
                (<Link className={location.pathname===link.path?'active':''} key={link.path} to={link.path}>{link.name}</Link>)
              )}
        </div>
        <div className={showSidebar?'sidebar-btn active':'sidebar-btn'} onClick={()=>setShowsideBar(!showSidebar)}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
      </div>
      {showSidebar&&<Sidebar links={links} close={closeSidebar}/>}
    </>
  )
}
