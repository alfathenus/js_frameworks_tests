import React, {Component} from 'react'
import DataServiceSync from './../services/saludoService';

console.log(DataServiceSync);
class Saludo extends Component{
  render() {
    return (
      <div>
        {DataServiceSync.data.nombre}
      </div>
    );
  }
}

export default Saludo