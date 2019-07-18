import React from 'react'

export default (props) => {
    return (
      <div>
        <h1 className="display-4">{props.match.params.id}</h1>
        <p className="lead">Sinple app to manage</p>
        <p className="text-secondary ">Version 1.0.0</p>
      </div>
    );
}
;
