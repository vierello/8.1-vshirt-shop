var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var components = require('./components/tshirts.jsx');


if($('#container1').length > 0){
  ReactDOM.render(
    React.createElement(components.ShirtComponent),
    document.getElementById('container1')
  );
}

if($('#container2').length > 0){
  ReactDOM.render(
    React.createElement(components.CartComponent),
    document.getElementById('container2')
  );
}
