import React from 'react';

export default function ImproveSkill(){
    const skills=[
        "Learn new recipies",
        "Eperiment with new food",
        "Write your own recipies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked."
    ]
    return(
        <div className='section  improve-skills'>
            <div className='col img'>
               <img src='../gallery/img_10.jpg' alt=''/>
            </div>
            <div className='col skills'>
               <h1>Improve Your Culinary Skills</h1>
                   {skills.map((skill,index)=>(
                       <p className='skill-item' key={index}>{skill}</p>
                   ))}
               <button className='btn'>Signup Now</button>
            </div>
        </div>
    )
}