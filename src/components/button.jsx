import React from 'react'



const MyButton = (props) => <button onClick={props.onClick}>{props.text}</button>

const Button = (props) => {


  const handleTime = () => {
    alert(`" Bunlar gösterilecek ilk beş aydır",
          ${props.ShowDate()}`)
  }

  const greetPeaple = () => {
    alert("2024 yılında 30 günde react öğrenme sürecine hoşgeldiniz ")
  }

  return (
    <div>
      <MyButton text="show-date" onClick={handleTime} />
      <MyButton text="Greet People" onClick={greetPeaple} />
    </div>
  )
}

export default Button
