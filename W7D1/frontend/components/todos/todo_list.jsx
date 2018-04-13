import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component{

  render(){
    const {todos, receiveTodo, removeTodo} = this.props;
    //todoItems array
    const todoItems = todos.map((todo,idx) => (
        <TodoListItem
        key={idx}
        todo={todo}
        receiveTodo={ receiveTodo }
        removeTodo={ removeTodo}/>
      )
    );

      return(
        <div>
        <ul>
          {todoItems}
        </ul>

        <TodoForm receiveTodo={receiveTodo}/>

        </div>
      );


  }


}

export default TodoList;


// {todos.map(todo => (
//   <li key={todo.id}>
//   {todo.title}
//   </li>
// ))}
