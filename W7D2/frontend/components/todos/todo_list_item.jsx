import React from 'react';
import merge from 'lodash/merge';


class TodoListItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    let info = this.props.todo;
    console.log(info);

    return (
      <li>
        <p> {info.title} : {info.body}</p>
      </li>
    );

  }


}

export default TodoListItem;
