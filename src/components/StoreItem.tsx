import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShopingCartContext";
import { fomatCurrency } from "../utilities/fomatCurrency";
import "./ButtonStyle.css";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  size: string;
  benefit: string;
  imgUrl: string;
};

export function StoreItem({
  id,
  name,
  price,
  benefit,
  size,
  imgUrl,
}: StoreItemProps) {
  // after context is done get all of the functions here
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  // track if something in the cart or not ==> now make quantitiy dynamic
  const quantity = getItemQuantity(id);

  // hiding and dispalying benefit
  const [hide, setHide] = useState(true);

  // to display images we use bootrsap react card
  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={imgUrl}
          height="230px"
          style={{ objectFit: "cover" }}
        />

        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">
              {fomatCurrency(price)} <br />
              {size}
            </span>
          </Card.Title>

          <Link className="signup-signin" to={benefit}>
            <input
              type={"submit"}
              value={" click here to learn more"}
              className="signup-link"
            />
            {/* {benefit} */}
          </Link>
          <br />

          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className=" w-100"
                onClick={() => increaseCartQuantity(id)}
              >
                {" "}
                + Add To Cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button
                  onClick={() => removeFromCart(id)}
                  variant="danger"
                  size="sm"
                >
                  Remove
                </Button>
              </div>
            )}
            {/* <div className="benefit">
            {hide?<h5>{benefit}</h5>: null }
            <button onClick={()=> setHide(true)}>learn more</button>
            <button onClick={()=> setHide(false)}>hide</button>
          </div> */}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
