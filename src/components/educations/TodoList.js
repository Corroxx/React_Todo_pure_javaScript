import React from 'react'

import {EducationItem} from './EducationItem';

export const TodoList =(props) => {

  return (
    <div>
      <table className="Education-table">
        <tr className="Education-table-head">
          <th>Datum</th>
          <th>Ort</th>
          <th>Name</th>
          <th>eingeschrieben</th>
        </tr>
      {props.educations.map(item =>
        <EducationItem
          handleToggle={props.handleToggle}
          key={item.id}
          {...item}
          className="Education-item"/>)}
    </table>
    </div>
  )
}
