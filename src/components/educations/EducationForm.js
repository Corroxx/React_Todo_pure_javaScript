import React from 'react';

export const EducationForm= (props) => {
    return (
      <div>
        <form>
          <input  placeholder="Suche" onChange={props.handleInputChange} type="text"></input>
        </form>
      </div>
    )
}
