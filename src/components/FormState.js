import React, { useState } from 'react'
import Card from './Card'

const FormState = () => {
  const [formData, setformData] = useState  ({
    full_name:'',
    email:'',
    password:'',
    password_confirmation:''
  })
  const onChangeHandler = (e)=>{
    e.preventDefault()
      setformData({...formData , [e.target.id] : e.target.value})
  }

  const formHandler = (e)=>{
 e.preventDefault()
    
    console.log("Full Name:", formData.full_name);
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
    console.log("Confirm Password:", formData.password_confirmation);

  }
  return (
<Card>
      <form id="form-state-link">
      <input type="text" id="full_name" value={formData.full_name} placeholder="Full Name" onChange={onChangeHandler} />
        <input type="email" id="email" value={formData.email} placeholder="Email" onChange={onChangeHandler}/>
        <input type="password" id="password" value={formData.password} placeholder="Password" onChange={onChangeHandler}/>
        <input type="password" id="password_confirmation" value={formData.password_confirmation} placeholder="Confirm Password" onChange={onChangeHandler}/>
        <button type="submit" onClick={formHandler}>Submit</button>
      </form>
    </Card>
  )
}

export default FormState