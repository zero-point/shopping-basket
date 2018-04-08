import React, { Component } from "react";
import { connect } from "react-redux";
import "../Order/css/basket.css";
import ApiClient from "../../Api/ApiClient";
import Action from "../../redux/actions/Action";
import { Link } from "react-router-dom";

class Basket extends Component {
  state = {
    shoppingCart: [],
    products: {}
  };

  emptyCart = () => {
    this.setState({
      shoppingCart: []
    });
    var x = document.getElementsByTagName("input");
    for (var i = 0; i < x.length; i++) {
      x[i].value = 0;
    }
  };

  updateitem = e => {
    let itemFilter = [];
    let eprice = 0;
    var prod = this.props.products;
    for (var i = 0; i < prod.length; i++)
      if (prod[i].product === e.target.name) {
        eprice = prod[i].price;
      }
    if (e.target.value > 0) {
      if (this.state.shoppingCart[0]) {
        let test = 0;
        this.state.shoppingCart.map(
          x => (x.product === e.target.name ? test++ : test)
        );

        test > 0
          ? this.setState({
              shoppingCart: this.state.shoppingCart.map(x => {
                return x.product === e.target.name
                  ? {
                      product: x.product,
                      number: e.target.value,
                      price: eprice
                    }
                  : x;
              })
            })
          : this.setState({
              shoppingCart: [
                ...this.state.shoppingCart,
                {
                  product: e.target.name,
                  number: e.target.value,
                  price: eprice
                }
              ]
            });
      } else {
        this.setState({
          shoppingCart: [
            ...this.state.shoppingCart,
            { product: e.target.name, number: e.target.value, price: eprice }
          ]
        });
      }
    } else {
      this.setState({
        shoppingCart: [
          ...this.state.shoppingCart.map(x => {
            return x.product === e.target.name
              ? { product: x.product, number: 0 }
              : x;
          })
        ]
      });
    }
  };

  render(props) {
    return this.props.products[0] ? (
      <div className="new-Order">
        <div className="orderLeft">
          {this.props.products.map((x, i) => (
            <div className="item" key={i}>
              <ul>
                <li>Product:{x.product}</li>
                <li>
                  Price:{this.props.currency}
                  {x.price}
                </li>
              </ul>
              <li>Quantity</li>

              <input
                type="number"
                min="0"
                max="100"
                placeholder="0"
                name={x.product}
                onChange={this.updateitem}
              />
            </div>
          ))}
        </div>

        <div className="orderRight">
          <div />
          <img
            width="80"
            alt="cart"
            src="https://cdn2.iconfinder.com/data/icons/web/512/Shopping_Cart-512.png"
          />
          <br />
          <br />

          <ul>
            {this.state.shoppingCart.map(
              (x, i) =>
                x.number === 0 ? (
                  <li key={i} className="zeroItem">
                    {x.product} x {x.number}
                  </li>
                ) : (
                  <li key={i} className="notnullitem">
                    {x.product} x {x.number}
                  </li>
                )
            )}
          </ul>

          {this.state.shoppingCart[0] ? (
            <p>
              Total: £{this.state.shoppingCart
                .map(x => (x.number === 0 ? 0 : x.price * x.number))
                .reduce((x, y) => x + y)
                .toFixed(2)}{" "}
            </p>
          ) : (
            <p>Total: £0.00</p>
          )}

          <Link to="/basket">
            <button
              onClick={() => {
                this.emptyCart();
              }}
            >
              Empty
            </button>
          </Link>
        </div>
      </div>
    ) : (
      <h1>'Loading ...'</h1>
    );
  }
}

const stateToProps = state => {
  return {
    products: state.PricesList.products,
    currency: state.PricesList.currency,
    total: state.PricesList.total
  };
};
export default connect(stateToProps)(Basket);
