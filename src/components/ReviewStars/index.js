import React from 'react'

export default function index() {
  return (
    <div style={container}>
      <i className='fa fa-star'></i>
      <i className='fa fa-star'></i>
      <i className='fa fa-star'></i>
      <i className='fa fa-star'></i>
      <i className='fa fa-star'></i>
    </div>
  )
}

const container = {
    display: 'flex',
    alignItems: 'center',
    color: 'var(--color-golden)'
}