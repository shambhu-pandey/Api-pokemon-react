import React from "react"
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

const CompA = () => {
 const [num , setNum] = useState();
 const  [name , setName] = useState();
 const [moves , setMoves]= useState();
useEffect(() =>{
  async function getData(){
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    console.log(res.data.name); // name mil jaayega 
     setName(res.data.name);
     setMoves(res.data.moves.length);  // moves me length lagana padega because array ke form me hai toh hm direct access nhi kar sakte 
  }
  getData();
})


  return(
    <>
<h1>you choose {num} value</h1>
<h1>My name is {name}</h1>
<h1>I have {moves} moves </h1>
<select value = {num} 
onChange={(event) =>{
  setNum(event.target.value);
}}>

  <option value = "1">1</option>
  <option value = "25">25</option> 
  <option value = "2">2</option>
  <option value = "3">3</option>
  <option value = "4">4</option>
  <option value = "5">5</option>
</select>
    </>
  )
}

export default CompA;