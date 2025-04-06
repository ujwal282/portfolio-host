import React from 'react'

const Button = ({label, onClick, style}) => {
  return (
    <button
    onClick={onClick}
    style={style}
     className = 'bg-primary font-header p-2 rounded-sm text-white cursor-pointer'>{label}</button>
  )
}

export default Button;