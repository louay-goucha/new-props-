import React from 'react'

const Bio = (props) => {
    console.log(this,props)
    return (
        <div>
            <h2 style={{textAlign:"center", color:"blue",borderstyle:"solid", borderColor:"black", borderWidth:"3px"}} >Bio :</h2>
            <p style={{}} ><em>{props.bio}</em></p>
        </div>
    )
}

export default Bio;

