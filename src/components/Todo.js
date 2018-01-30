import React from 'react';
import style from './Todo.css';

const Todo = (props) => {
    return (
        <li className={style.listItem} key={props.task.id}>
            <span key={props.task.id}>{`${props.task.text} `}</span>
            <a href="#" onClick={() => {props.remove(props.task.id) }}>Remove</a>
        </li>
    );
}

export default Todo;