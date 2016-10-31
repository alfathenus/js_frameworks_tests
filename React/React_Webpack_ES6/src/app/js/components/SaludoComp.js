import React, {Component} from 'react'
import DataServiceSync from './../services/saludoService';
import SaludoCompView from './SaludoCompView';


class Saludo extends Component{
  render() {
    /*return (
      <div>
        {DataServiceSync.data.nombre}
      </div>
    );*/
    
    return SaludoCompView.bind(this)(DataServiceSync);
    
  }
}

export default Saludo