import {Button, Form } from 'react-bootstrap';
import React, { useState, useEffect} from "react";
import Card from "../Card/Card";
import "./form.css";

const FormInput = (props) => {
  // const [Data, setData] = useState({});
  const [User, setUser] = useState('');
  //Count we are using everytime we click on button count 
  const [Count, setCount] = useState(0);
  const [IsValid, setIsValid] = useState(false)
  
//we are fetching data using useEffect
  useEffect(
    () => {
      return async function getApi() {
        const resp = await fetch(`https://api.github.com/users/${User}`);
        const get = await resp.json();
        props.setData(get);
        console.log(props.Data.login)
        
      }
    },
    [Count]
  );
  const SubmitHanlder = (e)=> {
    e.preventDefault();
    setCount(Count + 1);
    setIsValid(true);
  };

  return (

    <div className="centerMyForm">
         <Form onSubmit={SubmitHanlder}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Search UserName</Form.Label>a
        <Form.Control type="text" placeholder="@user" onChange={(e)=>{setUser(e.target.value);setIsValid(false);}}/>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
    {
      IsValid ?  <div className="ResultCenter">
    <Card Data={props.Data}/>
  </div>  : ""
    }
    </div>
  );
};

export default FormInput;