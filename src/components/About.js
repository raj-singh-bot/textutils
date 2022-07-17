import React from 'react'

export default function About(props) {
  return (
    <div>
        <p style={{color: props.mode === 'dark' ?'white' :'black'}}>Raj</p>
    </div>
  )
}
