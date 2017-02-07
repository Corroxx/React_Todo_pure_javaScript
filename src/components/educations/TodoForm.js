import React from 'react';

export const TodoForm= (props) => {
    return (
      <div>
        <form>
          <input onChange={props.handleInputChange} type="text"></input>
        </form>
      </div>
    )
}
