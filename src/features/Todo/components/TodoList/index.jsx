import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classNames from 'classnames';

const TodoList = memo((props) => {
    const {todoList, onTodoClick} = props;
    const handleTodoClick = (todo, index) => {
        if(!onTodoClick) return;

        onTodoClick(todo, index);
    };
    return (
        <ul>
            {todoList.map((todo, index) => (
                <li key={todo.id} 
                className={
                    classNames({ 
                        'todo-item': true,
                        completed: todo.status === 'completed',
                    })
                }
                onClick={() => handleTodoClick(todo, index)}>{todo.title}</li>
            ))}
        </ul>
    );
});

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

export default TodoList;