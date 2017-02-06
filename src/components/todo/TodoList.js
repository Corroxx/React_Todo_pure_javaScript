import React from 'react'

export const TodoList = (props) => {

  return (
    <div>
      <ul>
      {props.educations.map( item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}
