import React from 'react'

const Meeting = ({params}:{params : {id:string}}) => {
  return (
    <div>meeting id : #{params.id}</div>
  )
}

export default Meeting