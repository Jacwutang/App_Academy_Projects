import React from 'react';


class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e){
    this.props.removeTodo(this.props.todo);
  }



  render(){


    return(
      <div>
        <li>
        {this.props.todo.title} {this.props.todo.body}
        <button
          onClick= {this.handleClick}
          value = {this.state}
        > DELETE
        </button>
        </li>

      </div>

    );
  }

}














export default TodoListItem;
