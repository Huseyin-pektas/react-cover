import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header';
import MapArrayFunction from './components/mapFunction/map';
import axios from 'axios';

const BASE_URL ="https://jsonplaceholder.typicode.com/users/1";

function App() {

const [user, setUser] = useState("")
  const getJsonServerUser  = async(id)=>{
   const response = await axios.get(BASE_URL)
   setUser(response.data)
  //  .then((res)=> console.log(res.data))
   
  console.log(response.data)
  }


//   const [first, setFirst] = useState("hüseyin")
//   const [lastName, setLastName] = useState("")
// // const skills =[ ["html","10"],["css",7],["javascript",9],["React",10]]

// useEffect(()=>{
//   debugger
//   console.log("herzaman çalışır")
// })

useEffect(()=>{
  getJsonServerUser()
  console.log("sayfa ilk render edildiğinde çalışır")
},[])

// useEffect(()=>{
//   debugger
//   console.log("sayfa ilk render edildiğinde ve first state değeri değişirse çalışır")
// },[first,lastName])
//  useEffect(()=>{
//   console.log("sayfa ilk yüklenilginde ve lastname degeri değiştiginde çalışır")
//  },[lastName])

  return (
    <>
      <div>
        <p>kullanıcı verileri </p>
        {user ? (
        <div>
          <p> ID: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
          <p> Phone:{user.phone}</p>
          <p> UserName:{user.username}</p>
          <p>WebSite: {user.website}</p>
          
          {/* Kullanıcının diğer bilgilerini de buraya ekleyebilirsiniz */}
        </div>
      ) : (
        <p>Yükleniyor...</p>
      )}


        {/* <MapArrayFunction skills={skills} /> */}
        {/* <Header /> */}
        {/* <p>{first}</p>
        <button onClick={()=>setFirst("adı değiştirdim")}>Adı Değiştir</button>
        <p>{lastName}</p>
        <button onClick={()=>setLastName("soyadı değiştirdim")}>soyadı değiştir</button> */}
      </div>
    </>
  )
}

export default App
