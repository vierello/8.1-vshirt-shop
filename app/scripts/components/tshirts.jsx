var React = require('react');

var TShirtCollection = require('../models/tshirts').TShirtCollection;


var Shirts = React.createClass({
  render: function(){
    var self = this;
    var shirts = this.props.shirts.map(function(shirt){
      return (
        <div key={shirt.cid}>
          <img src={shirt.get('picture')}></img>
          <span>{shirt.get('name')}</span>
          <span>{shirt.get('price')}</span>
          <input type="number" className="quantity" placeholder="Quantity" />
          
        </div>
      )
    });

    return(
      <div>
        {shirts}
      </div>
    )
  }
});

var ShirtComponent = React.createClass({
  getInitialState: function(){
    return {
      shirts: [],
    }
  },

  componentWillMount: function(){
    var shirts = new TShirtCollection();

    shirts.add([
      {'name': '2013 Pearl Jam Needle Shirt' ,'picture': 'https://s3.amazonaws.com/pj-images.modlife.com/store_images/1/medium/IMG_4644.jpg' ,'price': 2499},
      {'name': '2015 Pearl Jam Bison Shirt','picture': 'https://s3.amazonaws.com/pj-images.modlife.com/store_images/1/medium/BuffaloFull.jpg' ,'price': 2499},
      {'name': '2016 Pearl Jam Silver Anniversary Mens Shirt','picture': 'https://s3.amazonaws.com/pj-images.modlife.com/store_images/1/medium/1593_10.jpg' ,'price': 2999}
    ]);
  },

  render: function(){
    return (
      <div>
        <header>
          <h3>VShirts</h3>
          <a href="index.html">T-Shirts</a>
          <a href="cart.html">Cart</a>
        </header>
        <Shirts shirts={this.state.shirts}/>
      </div>
    )
  }
});

module.exports = ShirtComponent;
