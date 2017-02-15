import React from 'react'

import {EducationItem} from './EducationItem';

export const EducationList =(props) => {

  return (
    <div>
      <table className="Education-table">
          <thead>
            <tr className="Education-table-head">
              <th>Datum</th>
              <th>Ort</th>
              <th>Name</th>
              <th>eingeschrieben</th>
              <th>Status</th>
            </tr>
        </thead>
        <tbody>
      {props.educations.map(item =>
        <EducationItem
          handleToggle={props.handleToggle}
          handleRemove = {props.handleRemove}
          key={item.id}
          {...item}
          className="Education-item"/>)}
          </tbody>
    </table>
    </div>
  )
}
