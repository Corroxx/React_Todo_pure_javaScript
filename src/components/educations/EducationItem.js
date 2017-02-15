import React from 'react';

export const EducationItem =(props) => {
  const handleToggle = props.handleToggle
  const handleRemove = props.handleRemove
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.location}</td>
      <td>{props.name}</td>
      <td className="Edu-checkin">
          <input
              type="checkbox"
              disabled={props.changeable ? '' : "disabled"}
              onChange={()=> handleToggle(props.id)}
              defaultChecked={props.participate}
            />
      </td>
      <td><span
            className={props.changeable ? "open" : "close"}>
          {props.changeable ? "anmelden" : "Anmeldung abgeschlossen"}
      </span></td>
      <td className="Remove-Row"><span className="delete-item" onClick={() => handleRemove(props.id)}>X</span></td>

    </tr>

  )
}
 EducationItem.propTypes = {
     handleToggle : React.PropTypes.func.isRequired,
     handleRemove: React.PropTypes.func.isRequired,
     date: React.PropTypes.string.isRequired,
     name: React.PropTypes.string.isRequired,
     id: React.PropTypes.number.isRequired
 }
