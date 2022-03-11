import React from 'react'

interface IButtonProps {
    title: string
   
}


const Button = ({title}: IButtonProps) => {
  return (
    <>
        <button >{title}</button>

    </>
  )
}

export default Button