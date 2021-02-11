import React from 'react'

const Profession = (props) => {
    console.log(this,props)
    return (
        <div style={{borderstyle:"solid", borderColor:"black", borderWidth:"3px"}}>
            <h2>Profession : {props.profession} </h2>
        </div>
    )
}

export default Profession;
