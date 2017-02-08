import React from 'react';

export const EducationForm= (props) => {
    return (
      <div>
        <form>
          <input onChange={props.handleInputChange} type="text"></input>
        </form>
      </div>
    )
}
