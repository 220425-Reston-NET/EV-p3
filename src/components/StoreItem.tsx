import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShopingCartContext";
import { fomatCurrency } from "../utilities/fomatCurrency";
import './ButtonStyle.css'

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  // after context is done get all of the functions here
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  
  // track if something in the cart or not ==> now make quantitiy dynamic
  const quantity = getItemQuantity(id)

  // to display images we use bootrsap react card
  return (
    // adding class to card after we show currency
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
          <span className="ms-2 text-muted">{fomatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className=" w-100" onClick={() => increaseCartQuantity(id)}> + Add To Cart</Button>
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
                <Button  onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>

        
      </Card.Body>
    </Card>
  );
}
