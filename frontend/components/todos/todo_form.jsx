import React from 'react';
import uniqueId from '../../util/id';

class TodoForm extends React.Component{
  //needs state because it needs to keep track of form data

  constructor(props){
    super(props);
    this.state = {title: "", body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property){

    //returns a function that takes whatever
    return e => this.setState( { [property]:e.target.value} );

  }

  handleSubmit(e){
    e.preventDefault();
    //this.state => {title:'hi', body: 'bye'}
    const todo = Object.assign({}, this.state);

    this.props.receiveTodo(todo);
     this.setState({title: "blank", body: "blank"});

  }


  render(){

    return(
      <form onSubmit={this.handleSubmit}>

        <label> Title:
          <input
          ref = "title"
          value = {this.state.title}
          onChange = {this.update('title')}

          />

        </label>


        <label> Body
          <input
          ref = "body"
          value = {this.state.body}
          onChange = {this.update('body')}
        />

        </label>

        <button> Add Todo </button>

      </form>
    )

  }





}

export default TodoForm;
