import React from 'react'

const Buttons = ({color,text,onClick}) => {
  return (
    <button className="btn" style={{background:color}} onClick={onClick}>{text}</button>
  )
}

export default Buttons