
export const allTodos = ({todos}) => (Object.keys(todos).map(id => todos[id]));
//todos = [ {id:1, title: , id:2,title:}]
