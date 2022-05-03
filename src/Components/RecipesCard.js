import React from 'react'
import CustomImage from './CustomImage'
export default function RecipesCard({recipe}) {
  return (
    <div className='recipe-card'>
        <CustomImage img={recipe.image} pt={"65%"}/>
        <div className='recipe-card-info'>
            <img className='author-img' src={recipe.authorImg} alt=''/>
            <p className='recipe-title'>{recipe.title}</p>
            <p className='recipe-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nam unde a perferendis impedit adipisci dolorem asperiores veniam at esse sit, iusto mollitia maiores, voluptatem maxime similique libero sequi nihil!</p>
            <a href='#!' className='view-btn'>View Profile</a>
        </div>
    </div>
  )
}
