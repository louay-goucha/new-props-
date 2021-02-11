import React from 'react'

  const ActionLink = (props) => {
  const handleClick = e => {
    e.preventDefault();
      alert(props.alert);
      console.log(this,props)
  };
 
  return (
    <a className="button"  href="/" onClick={handleClick}>
      Click me
    </a>
  );
 };


export default ActionLink;
