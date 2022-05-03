import React from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default function Settings() {
  const [theme,setTheme]=React.useState("light");
  const [colorIndex,setPrimaryColor]=React.useState(0);
  const [fontSize,setFontSize]=React.useState(0);
  const [speedIndex,setSpeed]=React.useState(0);
  const [settings, setSettings] = React.useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1
})
 function changeTheme(i){
   const _theme={...themes[i]}
   setTheme(i===0?"light":"dark");
   let _setting={...settings}
   for(let key in _theme){
     _setting[key]=_theme[key]
   }
   setSettings(_setting)
 }
 useEffect(()=>{
   console.log(settings)
   const root=document.documentElement;
   for(let key in settings){
     root.style.setProperty(key,settings[key])
   }
 },[settings])
const themes = [
  {
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757"
  },
  {
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(77, 77, 77)",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
  }
]
  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)"
]
function changeColor(i){
  const _color=primaryColors[i];
  let _setting={...settings}
  _setting["--primary-color"]=_color;
  setPrimaryColor(i)
  setSettings(_setting)
}

const fontSizes = [
  {
      title: "Small",
      value: "12px"
  },
  {
      title: "Medium",
      value: "16px"
  },
  {
      title: "Large",
      value: "20px"
  }
]
function changeSize(i){
  const _fontSize={...fontSizes[i]}
  let _setting={...settings};
  _setting['--font-size']=_fontSize.value;
  setFontSize(i)
  setSettings(_setting)
}
const animationSpeeds = [
  {
        title: "Slow",
        value: 2
  },
  {
        title: "Medium",
        value: 1
  },
  {
        title: "Fast",
        value: .5
  }
]
function changeSpeed(i){
  const _speed={...animationSpeeds[i]}
  let _setting={...settings};
  _setting['--animation-speed']=_speed.value;
  setSpeed(i);
  setSettings(_setting)
}
  return (
    <div>
      <div className='setting'>
        <h2>Preferred theme</h2>
        <div className='option-container'>
           <div className='option light' onClick={()=>changeTheme(0)}>
              {theme==="light"&&<div className='check'>
                <FontAwesomeIcon icon={faCheck}/>
              </div>}
           </div>
           <div className='option dark' onClick={()=>changeTheme(1)}>
              {theme==="dark"&&<div className='check'>
                <FontAwesomeIcon icon={faCheck}/>
              </div>}
           </div>
        </div>
      </div>
      <div className='setting'>
        <h2>Primary color</h2>
        <div className='option-container'>
           {primaryColors.map((color,index)=>(
            <div className='option color-picker' style={{backgroundColor: color}} onClick={()=>changeColor(index)} >
                {colorIndex===index&&<div className='check'>
                  <FontAwesomeIcon icon={faCheck}/>
                </div>}
            </div>
           ))}
        </div>
      </div>
      <div className='setting'>
        <h2>Font size</h2>
        <div className='option-container'>
           {fontSizes.map((size,index)=>(
            <button className='btn' onClick={()=>changeSize(index)}>
              {size.title}
              {fontSize===index&&<span><FontAwesomeIcon icon={faCheck}/></span>}
              
            </button>                
           ))}
        </div>
      </div>
      <div className='setting'>
        <h2>Animation speed</h2>
        <div className='option-container'>
           {animationSpeeds.map((speed,index)=>(
            <button className='btn' onClick={()=>changeSpeed(index)}>
              {speed.title}
              {speedIndex===index&&<span><FontAwesomeIcon icon={faCheck}/></span>}
              
            </button>                
           ))}
        </div>
      </div>
    </div>
  )
}
