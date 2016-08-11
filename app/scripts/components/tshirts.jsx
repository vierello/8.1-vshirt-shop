var React = require('react');
var Cookies = require('js-cookie');

var TShirtCollection = require('../models/tshirts').TShirtCollection;
var CartCollection = require('../models/tshirts').CartCollection;


var CartComponent = React.createClass({
  render: function(){
    var self = this;

    var cart = JSON.parse(localStorage.getItem('cartList'));
    //console.log(cart);
    var fillCart = cart.map(function(cartItem, index){
      console.log(cartItem);
      return(
        <tbody key={index}>
          <tr>
            <td>{cartItem.name}</td>
            <td>{cartItem.size}</td>
            <td>{cartItem.quantity}</td>
            <td></td>
            <td><button onClick={self.handleRemove} className="btn btn-primary">Remove</button></td>
          </tr>
        </tbody>
      )
    });

    return(
      <div>
        <header>
          <h3>V-Shirts</h3>
          <img className="logo" src="./images/v-logo.png" />
          <a href="index.html">T-Shirts</a>
          <a href="cart.html">Cart</a>
        </header>
        <div className="col-md-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="col-md-4">Shirt</th>
                <th className="col-md-1">Size</th>
                <th className="col-md-1">QTY</th>
                <th className="col-md-4">Deal Expires</th>
                <th className="col-md-2">Remove</th>
              </tr>
            </thead>
            {fillCart}
          </table>
          <button type="submit" className="btn btn-success">Place Order</button>
        </div>
      </div>

    )
  }
});

var Shirts = React.createClass({
  render: function(){
    //console.log(this.props.shirts);
    var self = this;
    var shirts = this.props.shirts.map(function(shirt, index){
      //console.log(shirt);
      return (
        <div className="tile col-md-4" key={index}>
          <img className="picture" src={shirt.get('picture')}></img>
          <div>
            <span className="name">{shirt.get('name')}</span>
            <span className="price">{shirt.displayPrice()}</span>
          </div>
          <input onChange={self.props.handleQuantityChange} type="number" className="quantity" placeholder="Quantity" />
          <select onChange={self.props.handleSizeChange} className="select-size">
            <option>Size</option>
            <option>XXL</option>
            <option>XL</option>
            <option>L</option>
            <option>M</option>
            <option>SM</option>
          </select>
          <button onClick={function(){self.props.handleAddToCart(shirt)}} className="btn add-to-cart btn-primary">Add To Cart</button>
        </div>
      )
    });

    return(
      <div className="row">
        {shirts}
      </div>
    )
  }
});

var ShirtComponent = React.createClass({
  getInitialState: function(){
    return {
      shirts: [],
      cartList: [],
      'size': '',
      'quantity': ''
    }
  },

  componentWillMount: function(){
    var shirts = new TShirtCollection();
    var cartList = new CartCollection();


    shirts.add([
      {'name': '2013 Pearl Jam Needle Shirt' ,'picture': 'https://s3.amazonaws.com/pj-images.modlife.com/store_images/1/medium/IMG_4644.jpg' ,'price': 2499},
      {'name': '2015 Pearl Jam Bison Shirt','picture': 'https://s3.amazonaws.com/pj-images.modlife.com/store_images/1/medium/BuffaloFull.jpg' ,'price': 2499},
      {'name': '2016 Pearl Jam Silver Anniversary Mens Shirt','picture': 'https://s3.amazonaws.com/pj-images.modlife.com/store_images/1/medium/1593_10.jpg' ,'price': 2999},
      {'name': '2008 Stickman Shirt','picture': 'https://s3.amazonaws.com/pj-images.modlife.com/store_images/1/medium/1168_1.jpg','price': 2499},
      {'name': '2013 Pearl Jam Combi Shirt','picture': 'https://s3.amazonaws.com/pj-images.modlife.com/store_images/1/medium/IMG_4683.jpg','price': 2499},
      {'name': '2015 Pearl Jam Snowcap Shirt Gray','picture': 'https://s3.amazonaws.com/pj-images.modlife.com/store_images/1/medium/RainierGreyFull.jpg','price': 2499}
    ]);

    this.setState({
      'shirts': shirts,
      'cartList': cartList
    });
  },

  handleAddToCart: function(shirt){
    this.state.cartList.add(shirt)
    this.forceUpdate()
    localStorage.setItem('cartList', JSON.stringify(this.state.cartList))
    //console.log(localStorage);

    //console.log(this.state.cartList);
  },

  handleQuantityChange: function(e){
    console.log(this);
    this.setState({'quantity': e.target.value})
  },

  handleSizeChange: function(e){
    this.setState({'size': e.target.value})
  },

  render: function(){
    //console.log(this.state.shirts);
    return (
      <div>
        <header>
          <h3>V-Shirts</h3>
          <img className="logo" src="./images/v-logo.png" />
          <a href="index.html">T-Shirts</a>
          <a href="cart.html">View Cart</a>
        </header>
        <div className="well deal-well col-md-12">
          <h2>V-Shirt T-Shirt Deals!!</h2>
          <h3>Deals expire 10 mintues after you add them to cart.</h3>
        </div>
        <Shirts handleSizeChange={this.handleSizeChange} handleQuantityChange={this.handleQuantityChange} handleAddToCart={this.handleAddToCart} shirts={this.state.shirts}/>
      </div>
    )
  }
});

module.exports = {
  'ShirtComponent': ShirtComponent,
  'CartComponent': CartComponent
}
