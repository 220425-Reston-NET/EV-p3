import { Grid } from "@mui/material";
import { TextField } from "formik-mui";
import React from "react";
// import { Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShopingCartContext";
import StoreItems from "../../data/items.json";
import { fomatCurrency } from "../../utilities/fomatCurrency";
import "./Checkout.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="row">
          <div className="col">
            <Item
              name="Instax Mini 90 Neo Classic"
              price="$144.99"
              img="http://ecx.images-amazon.com/images/I/61%2BABMMN5zL._SL1500_.jpg"
            />
          </div>
          <div className="col no-gutters">
            <Checkout />
          </div>
        </div>
      </div>
    );
  }
}

const Item = (props: {
  img: string | undefined;
  name:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  price:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => (
  <div className="item-container">
    <div className="item-image">
      <img src={props.img} />
      <div className="item-details">
        <h3 className="item-name"> {props.name} </h3>
        <h2 className="item-price"> {props.price} </h2>
      </div>
    </div>
  </div>
);

const Checkout = (props: any) => (
  <div className="checkout">
    <div className="checkout-container">
      <h3 className="heading-3">Billing Address</h3>

      <Input label="First name" type="text" name="name" imgSrc={undefined} />
      <Input label="Last name" type="text" name="name" imgSrc={undefined} />
      <Input label="Email" type="text" name="name" imgSrc={undefined} />
      <Input label="Address" type="text" name="name" imgSrc={undefined} />
      <h3 className="heading-3">Credit card information</h3>

      <Input
        label="Cardholder's Name"
        type="text"
        name="name"
        imgSrc={undefined}
      />
      <Input
        label="Card Number"
        type="number"
        name="card_number"
        imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
      />
      <div className="row">
        <div className="col">
          <Input
            label="Expiration Date"
            type="month"
            name="exp_date"
            imgSrc={undefined}
          />
        </div>
        <div className="col">
          <Input label="CVV" type="number" name="cvv" imgSrc={undefined} />
        </div>
      </div>
      <Button text="Place order" />
    </div>
  </div>
);

const Input = (props: {
  label:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  type: string | (string & {}) | undefined;
  name: string | undefined;
  imgSrc: string | undefined;
}) => (
  <div className="input">
    <label>{props.label}</label>
    <div className="input-field">
      <input type={props.type} name={props.name} />
      <img src={props.imgSrc} />
    </div>
  </div>
);

const Button = (props: {
  text:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => (
  <Link to={`/thankyou`}>
  <input type={"submit"} value={"Proceed to Checkout "} className="checkout-btn"/>
</Link>
  // <button className="checkout-btn" type="button">
  //   {props.text}{" "}
  // </button>
);

export default Checkout;
