import React from 'react'

const Error = ({error}) => {
  if(error === '')
    return null;  
  return (
    <div>
      <p style={{color: 'red', fontSize: '1.6rem'}}>{error}</p>
    </div>
  )
}

export default Error
