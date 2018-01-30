import React from 'react';

let Title = props => 
    <div>
        <h1>{props.title}</h1>
        <h2>{`${props.left} tasks left`}</h2>
    </div>;

export default Title;