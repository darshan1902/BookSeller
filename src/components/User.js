import React from 'react'
import SimpleCard from './Card';
import { Typography } from '@material-ui/core';

export default function User(props) {
  return (
   <>
     <div>
        <h1>{props.name}</h1>
        <h2>{props.role}</h2>
    </div>
    <SimpleCard/>

   </>

  )
}
