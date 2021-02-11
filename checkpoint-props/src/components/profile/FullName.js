import React from "react"

const Fullname = props =>{
    console.log(this,props)
  return (
       <div className="full">
            <h1><strong><em> Full Name : {props.name}</em></strong> </h1>
      </div>
     )
}
export default Fullname;