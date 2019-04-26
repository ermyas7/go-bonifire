import React from 'react'
import {Link} from 'react-router-dom'

const Success = ({success}) => {
  if(success === '')
    return null;   
  return (
    <div>
      <Link to={process.env.PUBLIC_URL + '/cart'} style={successLink}>
            {success}
      </Link>
    </div>
  )
}

const successLink = {
    color: 'currentColor',
    fontSize: '1.5rem'
}

export default Success