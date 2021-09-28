import React from "react";

const Notification = ({ message }) => {
  const style = {
    color: 'green',
    backGround: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    fontStyle: 'bold',
    fontSize: 50
  }

  if (message === '') {
    return null
  }

  return (
    <div style={style} >
      {message}
    </div>
  )
}

export default Notification