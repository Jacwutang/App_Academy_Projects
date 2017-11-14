import React from 'react';

class TodoList extends React.Component{

  render(){
    const {todos, receiveTodo} = this.props;

    return(
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
          {todo.title}
          </li>
        ))}
      </ul>
    );
  }


}

export default TodoList;
