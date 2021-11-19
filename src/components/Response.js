import React from "react";

export default function Response(props) {
    return (
        <div>
            <label htmlFor={props.id}>{props.name}</label>
            <input type="text" id={props.id}>{props.text}</input>
        </div>
    );
  }
  