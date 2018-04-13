import React from 'react';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let x = this.props.match.params.itemId;
    console.log(x);

    return(
      <div>

        <ul>
          <li><h3>{this.props.item[x].name}</h3></li>
          <li>price: ${this.props.item[x].price}</li>
          <li>happiness: {this.props.item[x].happiness}</li>
        </ul>
      </div>
    );
  }

}

export default ItemDetail;
