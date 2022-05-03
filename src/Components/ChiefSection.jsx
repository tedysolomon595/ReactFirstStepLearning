import React from 'react'
import ChiefCards from './ChiefCards'

export default function ChiefSection() {
    const chiefs=[
        {
            name: "Juan Carlos",
            img: "./chief/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "./chief/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "./chief/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "./chief/img_4.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "./chief/img_5.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "./chief/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
  return (
    <div className='section chief'>
       <h1 className='title'>Our Top Chiefs</h1>
       <div className='chiefs-container'>
          {chiefs.map((chief,index)=>(
              <ChiefCards chief={chief} key={index}/>
          ))}
       </div>
    </div>
  )
}
