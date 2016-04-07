import React, {Component} from 'react'
import data from './../../data/data.json';

class Saludo extends Component{
  render() {
    return (
      <div>
        {data.nombre}
      </div>
    );
  }
}

export default Saludo