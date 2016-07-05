var React = require('react');


var CartComponent = React.createClass({
  render: function(){
    return(
      <div>
        <header>
          <h3>VShirts</h3>
          <a href="index.html">T-Shirts</a>
          <a href="cart.html">Cart</a>
        </header>
      </div>
    )
  }
});

module.exports = CartComponent;
