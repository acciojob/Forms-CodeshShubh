import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
    const formRef = useRef();

    const submitHandler = (e)=>{
        e.preventDefault()
        const form = formRef.current;

    console.log("Full Name:", form.full_name.value);
    console.log("Email:", form.email.value);
    console.log("Password:", form.password.value);
    console.log("Confirm Password:", form.password_confirmation.value);
    }

  return (
    <Card>
      <form id="form-ref-link"  ref={formRef} onSubmit={submitHandler}>
        <input type="text" id="full_name" placeholder="Full Name" />
        <input type="email" id="email" placeholder="Email"/>
        <input type="password" id="password" placeholder="Password"/>
        <input type="password" id="password_confirmation" placeholder="Confirm Password" />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
