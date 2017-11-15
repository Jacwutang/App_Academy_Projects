import { connect } from 'react-redux';
import TodoList from './todo_list';

import { receiveTodos, receiveTodo, fetchTodos, createTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';


export const mapStateToProps = state => ({
  todos: allTodos(state)

});

//this lets us wrap all of the dispatch(action) in an outer function,
//so it is easier for us to call on it later.

export const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  requestTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))




});


//this is weird, app imports this, which in turn imports TodoList.

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
