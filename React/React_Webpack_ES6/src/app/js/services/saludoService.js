var data = require('./../data/data.json');

module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = data.nombre;
  return greet;
};
     