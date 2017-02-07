import React from 'react';

export const EducationItem =(props) => {
  const handleToggle = props.handleToggle
  return (
    <tr className="Education-row">
      <td>{props.date}</td>
      <td>{props.location}</td>
      <td>{props.name}</td>
      <td><input
          onChange={()=> handleToggle(props.id)}
          defaultChecked={props.participate}
          type="checkbox"/>
      </td>
    </tr>

  )
}
