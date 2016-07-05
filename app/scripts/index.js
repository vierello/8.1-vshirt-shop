var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var ShirtComponent = require('./components/tshirts.jsx');
var CartComponent = require('./components/cart.jsx');

if($('#container1').length > 0){
  ReactDOM.render(
    React.createElement(ShirtComponent),
    document.getElementById('container1')
  );
}

if($('#container2').length > 0){
  ReactDOM.render(
    React.createElement(CartComponent),
    document.getElementById('container2')
  );
}
