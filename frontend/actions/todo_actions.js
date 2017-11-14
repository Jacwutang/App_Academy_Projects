//THESE ARE THE TYPES OF ACTIONS
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

//this todos is an array of todo's. 
export const receiveTodos = todos => (
  {
    type: RECEIVE_TODOS, todos
  }
);

export const receiveTodo = todo => (
  {
      type: RECEIVE_TODO,
      todo
  }
);

//todo4 = {id:4, title: 'todo4',body: 'todo4'}
//todo5 = {id:5, title: 'todo5',body: 'todo5'}

//let newTodos = {todo4,todo5}
