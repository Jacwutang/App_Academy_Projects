import React from 'react';
import TodoList from './todo_list';
import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import {receiveTodo, receiveTodos, removeTodo} from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});


const mapDispatchToProps = (dispatch) => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

//filters state and passes it down to ToDoList component
//ToDoList would have access to todos, receiveTodo as props
