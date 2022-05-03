
import React from 'react'
import PreviousSearches from '../PreviousSearches';
import RecipesCard from '../RecipesCard';
export default function Recipes() {
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/gallery/img_1.jpg",
            authorImg: "/chief/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/gallery/img_4.jpg",
            authorImg: "/chief/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/gallery/img_5.jpg",
            authorImg: "/chief/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/gallery/img_6.jpg",
            authorImg: "/chief/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/gallery/img_10.jpg",
            authorImg: "/chief/img_6.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/gallery/img_1.jpg",
            authorImg: "/chief/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/gallery/img_4.jpg",
            authorImg: "/chief/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/gallery/img_5.jpg",
            authorImg: "/chief/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/gallery/img_6.jpg",
            authorImg: "/chief/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/gallery/img_10.jpg",
            authorImg: "/chief/img_6.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/gallery/img_5.jpg",
            authorImg: "/chief/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/gallery/img_6.jpg",
            authorImg: "/chief/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)
    const foodItems=['Burger','Pizza','Cookies','Juice','Biriyani','Salad','Ice-Cream','Lasagna','Pudding','Soup']
  return (
      <div>
          <PreviousSearches foodItems={foodItems}/>
          <div className='recipes-container'>
              {recipes.map((recipe,index)=>(
                  <RecipesCard key={index} recipe={recipe}/>
              ))}              
          </div>
      </div>
  )
}
