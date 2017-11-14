import { connect } from 'react-redux';
import TodoList from './todo_list';

import { receiveTodos, receiveTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';


export const mapStateToProps = state => ({
  todos: allTodos(state)

});


export const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))





});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
