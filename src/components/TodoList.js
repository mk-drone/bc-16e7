import React from 'react';
import Todo from './Todo';


let TodoList = props => 
    props.items.map((val, index) => {
        return <Todo key={val.id} task={val} remove={props.remove}/>
    });

export default TodoList;