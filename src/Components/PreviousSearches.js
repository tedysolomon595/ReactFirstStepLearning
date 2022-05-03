import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function PreviousSearches({foodItems}) {
  return (
    <div className='previous-search'>
       <h2>Previous Searches</h2>
       <div className='previous-search-container'>
           {foodItems.map((item,index)=>(
               <div className='food-item' key={index} style={{animationDelay: index*.2+"s"}} >{item}</div>
           ))}
       </div>
       <div className='search-box'>
           <form>
               <input className='search-input' placeholder='Search...'/>
               <button className='btn'>
                   <FontAwesomeIcon icon={faSearch}/>
               </button>
           </form>
       </div>
    </div>
  )
}
