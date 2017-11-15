import merge from 'lodash/merge'
import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  }
}

const todosReducer = (state = initialState, action) => {
    let nextState;
    switch(action.type){
      case REMOVE_TODO:
        nextState = merge({}, state);
        delete nextState[action.todo.id];
        return nextState;


      case RECEIVE_TODOS:
        nextState = {};
        action.todos.forEach( todo => nextState[todo.id] = todo);
        return nextState;


      case RECEIVE_TODO:
        const newTodo = {[action.todo.id]: action.todo};
        return merge({}, state, newTodo);

        default:
        return state;


    }


}


export default todosReducer;
