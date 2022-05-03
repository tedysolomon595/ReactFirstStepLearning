import React from "react";
import CustomImage from "./CustomImage";

export default function Hero(){

    const images=[
        "../gallery/img_1.jpg",
        "../gallery/img_2.jpg",
        "../gallery/img_3.jpg",
        "../gallery/img_4.jpg",
        "../gallery/img_5.jpg",
        "../gallery/img_6.jpg",
        "../gallery/img_7.jpg",
        "../gallery/img_8.jpg",
        "../gallery/img_9.jpg"
    ]   
    return(
         <div className="section hero">
             <div className="col ">
                <h1 className="title">What Are We About</h1>
                <p className="info">FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
                <button className="btn">explore now</button>
             </div>
             <div className="col gallery">
                 {images.map((img,index)=>(
                     <CustomImage key={index} img={img} pt={"85%"}/>
                 ))}
             </div>
         </div>
    )
}