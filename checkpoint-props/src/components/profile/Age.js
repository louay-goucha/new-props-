import React from 'react'

const Age= props =>{
    console.log(this,props)
     return (
        <div className="age">
            <h2>Age : {props.age} years old </h2>
        </div>
    )
}

export default Age
