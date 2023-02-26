import React from 'react'
import './Card.css';

function Card({logo,heading,text,bordered,price}) {
  return (
    <div className={bordered ? 'border cardparent' : 'cardparent'}>
        <img src={logo}/>
        <h3>{heading}</h3>
        <p className='cardtext'>{text}</p>
        {
            price &&
            <p>@ ZERO
            / month</p>
        }
    </div>
  )
}

export default Card