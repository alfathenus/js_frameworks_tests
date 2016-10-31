/* global DataServiceSync */
import React, {Component} from 'react'

var SaludoCompView = function(model) {
    return (
        <div>
            {model.data.nombre}
        </div>
    );
};

export default SaludoCompView;