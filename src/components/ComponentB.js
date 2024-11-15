import React from 'react'

const ComponentB = (props) => {
  return (
    <div style={{border : "5px solid red", margin : "50px", padding : "50px"}}>
        <h1>
        ComponentB
        </h1>
        <p>{props.text} </p>
    </div>
  )
}

export default ComponentB;