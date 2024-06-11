import React,{useState} from "react";

import User from "./User";
const Header = () => {
const [first, setFirst] = useState(0)

const Arttir =()=>{
    if (first < 10) {
        setFirst(first + 1)
       }else{
        alert("10 sayısını geçemezsiniz")
       }
}
const Azalt =()=>{
    if (first >=1) {
        setFirst(first-1)
       
    }else{
        alert("0 sayısını geçemezsiniz")
       }
}
  return (
    <>
    <div>
        
        <h3>{first}</h3>
        <button
         onClick={Arttir}
         >artır</button>
        <button onClick={Azalt}>azalt</button>
      </div>
      <User 
      first={first}
      setFirst={setFirst}
      firstName="Esra"
       surName="Pektas" Country="Batman" Azalt={Azalt} />
    </>
  )
}

export default Header
