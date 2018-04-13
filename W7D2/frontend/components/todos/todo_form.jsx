import React from 'react';
import uniqueId from '../../util/id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
  return (eas) => this.setState({[property]: eas.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const todo = Object.assign({}, this.state, {id: uniqueId()} );
    //dispatching the action right here.
    // this.props.receiveTodo(todo);
    console.log({todo});
    this.props.createTodo({todo}).then(
      () => this.setState({title: '',body: ''})
    );
    this.setState({

      title: "",
      body: ""
    }

  );

  }



  render(){

    return(

      <form onSubmit={this.handleSubmit}>
        <label> Title:
          <input

            ref = "title"
            value ={this.state.title}
            onChange = {this.update('title')}
            />
        </label>

        <label>Body:
          <input ref = "body" value = {this.state.body} onChange = {this.update('body')} />


        </label>

        <button> blah</button>
        <button className = 'create-button'> Create Todo!</button>
      </form>

    );
  }



}

export default TodoForm;
