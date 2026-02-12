import React from 'react'

export default function Alert(props) {
  return (
    <div>
      <div className={`alert alert-${props.alert?.type || 'secondary'}`} role="alert">
        {props.alert?.msg}
      </div>
    </div>
  
  )
}