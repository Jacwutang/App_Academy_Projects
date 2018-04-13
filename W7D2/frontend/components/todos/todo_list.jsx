import React from 'react';
import TodoListItem from './todo_list_item';
// module.exports = () => <h3> Todo List goes here!</h3>;
import TodoForm from './todo_form';
class TodoList extends React.Component {

  componentDidMount(){

      this.props.requestTodos();
  }



  render() {
    const { todos, receiveTodo ,createTodo} = this.props;
    const todoItems = todos.map(todo => (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          receiveTodo={ receiveTodo } />
      )
    );

    return(
      <div>
        <ul className="todo-list">
          { todoItems }
        </ul>

        <TodoForm receiveTodo={receiveTodo} createTodo = {createTodo}/>
      </div>
    );
  }
}

export default TodoList;
