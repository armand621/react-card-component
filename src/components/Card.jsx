import React from "react";

export default function Card(props){
  return(
    <div className="container">
        <h1>Hello {props.name}</h1>
        <p>Hi {props.p}</p>
    </div>
  )
}