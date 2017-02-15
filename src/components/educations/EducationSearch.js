import React from 'react';

export const EducationSearch= (props) => {
    return (
      <div>
          <input  placeholder="Suche" onChange={props.handleInputChange} type="text"></input>
      </div>
    )
}
EducationSearch.propTypes = {
    handleInputChange: React.PropTypes.func.isRequired,
}
