import React from 'react'
import './portfolio.css';
import BasicModal from './Boxmodel';
const Portfolio = () => {
  return (
    <div className='portfolio_content' id='portfolio'>
    <h1>PORTFOLIO</h1>
    <div className='model_setting'>
    <BasicModal modalheading={"Project 1"} modalpara={"This is the paragraph"} />
    <BasicModal modalheading={"Project 2"} modalpara={"This is the paragraph"} />
    <BasicModal modalheading={"Project 3"} modalpara={"This is the paragraph"} />
    <BasicModal modalheading={"Project 4"} modalpara={"This is the paragraph"} />
    <BasicModal modalheading={"Project 5"} modalpara={"This is the paragraph"} />
    <BasicModal modalheading={"Project 6"} modalpara={"This is the paragraph"} />
    </div>
    
    </div>
  )
}

export default Portfolio