import React from 'react';

import {SiAdobe, SiFigma, SiBlender, SiMicrosoftoffice, SiAbletonlive, SiUnrealengine, SiUnity } from "react-icons/si";
import Progressbar from "./Progressbar";

import './skills.css';

var icon_size = 50;
const Skills = () => {
    return (
        <div className='skills_content' id='skills'>
        <h1>SKILLS</h1>
        <div className='skills_progress'>
          <Progressbar done="90" text={"Adobe Illustrator"} />
          <Progressbar done="70" text={"Adobe XD"} />
          <Progressbar done="75" text={"Adobe After Effects"} />
          <Progressbar done="95" text={"Adobe Premier Pro"} />
          <Progressbar done="80" text={"Figma"} />
          <Progressbar done="90" text={"DaVinci Resolve"} />
          <Progressbar done="75" text={"Blender"} />
          <Progressbar done="95" text={"Fruity Loops"} />
          <Progressbar done="90" text={"Microsoft Office"} />
          <Progressbar done="70" text={"Ableton Live"} />
          <Progressbar done="45" text={"Unreal Engine"} />
          <Progressbar done="60" text={"Unity"} />
          </div>
          <div className='skill_icons'>
          <a><SiAdobe color='#ffffff' size={icon_size} /></a>
          <a><SiFigma color='#ffffff' size={icon_size} /></a>
          <a><SiBlender color='#ffffff' size={icon_size} /></a>
          <a><SiMicrosoftoffice color='#ffffff' size={icon_size} /></a>
          <a><SiAbletonlive color='#ffffff' size={icon_size} /></a>
          <a><SiUnrealengine color='#ffffff' size={icon_size} /></a>
          <a><SiUnity color='#ffffff' size={icon_size} /></a>
          </div>
          <h3>I Am Available For Freelance!</h3>
          </div>
        
      )
}

export default Skills;