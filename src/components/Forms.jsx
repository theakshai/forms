import React, { Fragment, useState } from "react"
import './style.css'

let Forms = () => {


  const[firstName,setFirstName] = useState('');
  const[lastName,setlastName] = useState('');
  const[age,setAge] = useState(0);
  const[mobileNumber,setMobileNumber] = useState();

  
  let showDetails = () => {
    alert(`
      The firstName is ${firstName},
      The lastName is ${lastName},
      The age is ${age},
      The mobileNumber is ${mobileNumber},
      `)
  }

  return (

    <Fragment>

    <div style={{display: 'flex'}}>
        <label for="firstName" >FirstName:</label>
        <input id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
        <label for="lastName" >LastName:</label>
        <input id="lastName" value={lastName} onChange={(event) => setlastName(event.target.value)}></input>
        <label for="age" >Age:</label>
        <input id="age" type="number" value={age} onChange={(event) => {setAge(event.target.value)}} required></input>
        <label for="mobileNumber" >MobileNumber:</label>
        <input id="mobileNumber" type="number" value={mobileNumber} onChange={(event) => {setMobileNumber(event.target.value)}} required></input>
      <button type="submit" onClick={showDetails}>Submit</button>
    </div>

    </Fragment>
  )
}

export default Forms;
