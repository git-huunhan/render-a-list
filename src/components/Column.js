import React, {Component} from 'react';
import './Table.css';

class Column extends Component{
  render(){
    return(
      <tr>
        <th>{this.props.col1}</th>
        <th>{this.props.col2}</th>
        <th>{this.props.col3}</th>
      </tr> 
    );
  }
}

export default Column;