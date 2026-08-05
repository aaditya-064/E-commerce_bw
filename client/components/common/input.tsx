import React, { FC } from 'react'

interface IProps{
    label: string,
    name: string,
    id: string,
    type: "text" | "password" | "email",
    placeholder: string,
    onChange: () => void,
    value: string
}
const Input: FC<IProps> = ({id, label, name, onChange, placeholder, type="text", value}) => {
  return  (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} onChange={onChange} placeholder={placeholder} value={value} />
    </div>
  )
}

export default Input
