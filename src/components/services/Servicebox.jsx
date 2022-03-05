import React from 'react'
import './servicebox.css';
import {BiPaint, BiVideo, BiMusic, BiCoinStack } from "react-icons/bi";
import {MdComputer, MdModelTraining} from "react-icons/md";

const Servicebox1 = ({headline, paragraph}) => {
  return (
    <div className='box_content'>
    <div className='image'>   
    <BiPaint color='#f76a52' size='50px' />
 </div>
    <h3>{headline}</h3>
    <a>{paragraph}</a>
    
    
    </div>
  )
}

const Servicebox2 = ({headline, paragraph}) => {
  return (
    <div className='box_content'>
    <div className='image'>   
    <BiVideo color='#f76a52' size='50px' />
 </div>
    <h3>{headline}</h3>
    <a>{paragraph}</a>
    
    
    </div>
  )
}

const Servicebox3 = ({headline, paragraph}) => {
  return (
    <div className='box_content'>
    <div className='image'>   
    <BiMusic color='#f76a52' size='50px' />
 </div>
    <h3>{headline}</h3>
    <a>{paragraph}</a>
    
    
    </div>
  )
}

const Servicebox4 = ({headline, paragraph}) => {
  return (
    <div className='box_content'>
    <div className='image'>   
    <BiCoinStack color='#f76a52' size='50px' />
 </div>
    <h3>{headline}</h3>
    <a>{paragraph}</a>
    
    
    </div>
  )
}

const Servicebox5 = ({headline, paragraph}) => {
  return (
    <div className='box_content'>
    <div className='image'>   
    <MdComputer color='#f76a52' size='50px' />
 </div>
    <h3>{headline}</h3>
    <a>{paragraph}</a>
    
    
    </div>
  )
}

const Servicebox6 = ({headline, paragraph}) => {
  return (
    <div className='box_content'>
    <div className='image'>   
    <MdModelTraining color='#f76a52' size='50px' />
 </div>
    <h3>{headline}</h3>
    <a>{paragraph}</a>
    
    
    </div>
  )
}

export {Servicebox1, Servicebox2, Servicebox3, Servicebox4, Servicebox5, Servicebox6};