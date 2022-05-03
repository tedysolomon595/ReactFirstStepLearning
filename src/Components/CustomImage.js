import React from 'react';
export default function CustomImage({img,pt}){
    return(
        <div className='custom-img' style={{paddingTop: pt}}>
            <img src={img} alt=''/>
        </div>
    )
}