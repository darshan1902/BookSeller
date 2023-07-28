import React from 'react'

export default function User(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.role}</h2>
    </div>
  )
}
